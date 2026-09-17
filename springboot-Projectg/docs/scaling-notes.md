# Scaling the schema for a real e-commerce production app

## Context

`V1__initial_schema.sql` is a prototype schema (per CLAUDE.md, the backend itself is prototype-stage — read-only controllers except Customer, `hibernate.ddl-auto: validate` + Flyway is already correctly wired for controlled schema evolution). It covers the happy-path relationships (Customer→Order, Order↔Item via OrderItem, Item↔Category) but has none of the mechanisms a real storefront needs to survive concurrent traffic, changing catalogs, and auditability requirements. This is a **read-only advisory writeup** — no schema, entity, or service files were changed to produce it. It focuses on "core correctness + scale essentials," not the fuller customer/commerce buildout (addresses, payments, cart, images, discounts), which is deferred for later.

Two categories of findings below: **(A) latent correctness bugs** in the current code that will bite as soon as real write-traffic (order creation) is implemented, and **(B) schema/infra gaps** to close before this could be called production-grade.

## A. Correctness bugs found while reading the code

- **`OrderItem` entity doesn't map `quantity` or `unit_price`** (`model/OrderItem.java`), even though `order_item` has both as `NOT NULL` columns (`V1__initial_schema.sql:47-49`). Right now nothing writes to `order_item` (there's no order-creation endpoint yet — `OrderHandler` only has `getAllOrders()`), so this hasn't surfaced. But as soon as checkout is implemented, Hibernate will either fail the insert or silently rely on the `DEFAULT 1` for quantity while leaving `unit_price` unset → insert failure. Fix before building checkout.
- **No price/name snapshot for historical orders.** `order_item.unit_price` is the right idea (protects against future price changes), but `item_name` isn't captured anywhere on the order. If an item's name changes or the item is deleted, past orders/receipts show wrong or missing info.
- **Hard deletes only.** There's no soft-delete column anywhere. Deleting a `category` or `item` that's referenced by `item_category`/`order_item` will violate FK constraints or, worse, silently orphan historical order data if cascade rules are added carelessly later.
- **`Order.total` is a stored, never-computed column.** Nothing in `OrderHandler` (or anywhere else) sums `order_item` lines into it — there's no order-creation code path at all yet. Whichever design creates orders needs to actually compute this (app-side sum of `quantity × unit_price`, done inside the same transaction as the insert) rather than trusting a client-supplied total.
- **`spring-boot-starter-validation` is a declared dependency but completely unused** — no `@NotNull`/`@Email`/`@Size` anywhere, even though the DB enforces `NOT NULL`/`UNIQUE` on `email`, `customer_name`, etc. Worth wiring up alongside any schema changes so bad data gets rejected at the API layer with a 400, not a DB constraint violation.
- **No pagination or search support anywhere** — every repository call is `findAll()` returning a full `List`. Fine at 20 seed rows; not fine once catalog/order tables have real volume. Worth designing indexes (see B.4) with `Pageable`-based queries in mind from the start.

## B. Schema changes for production scale

### 1. Inventory / stock
Add a dedicated concept of stock — either a `stock_quantity` column on `item` or (better, if you'll ever have multiple warehouses/fulfillment centers) a separate `inventory` table keyed by `item_id`. Either way it needs a `@Version` column (optimistic locking) so concurrent checkouts don't oversell: decrement stock inside the same transaction as order creation, and let Hibernate's version check fail/retry on conflict instead of a blind `UPDATE ... SET stock = stock - 1`.

### 2. Order status — history, not just current state
Keep `orders.status` for "current state" but add an `order_status_history` table (`order_id`, `status`, `changed_at`, optional `note`). Without it you can't answer "when did this ship" or debug a customer complaint about order state — and you lose that data forever once `orders.status` is overwritten.

### 3. Audit timestamps everywhere
Only `customer.registered_at` and `orders.created_at` have timestamps. Add `created_at` + `updated_at` (with `ON UPDATE CURRENT_TIMESTAMP`) to `item`, `category`, and `order_item` too — needed for cache invalidation, sync jobs, and just debugging "why does this look wrong."

### 4. Indexes
The schema currently only gets indexes for free from primary keys and the `UNIQUE` constraints on `email`/`category_name`. Missing:
- `orders.customer_id` — every "get a customer's orders" query does a full scan without this.
- `orders.status` — needed for admin/ops queries ("all PENDING orders").
- `item_category.category_id` — the composite PK `(item_id, category_id)` only optimizes lookups starting from `item_id`; filtering products *by category* (which `products/page.tsx`'s `categoryId` query param does, per CLAUDE.md) needs `category_id` indexed on its own.

### 5. Concurrency-safe money/inventory
- Add `@Version` to `Item` (or the new inventory row) so price/stock updates use optimistic locking rather than last-write-wins.
- Keep `DECIMAL(10,2)` for money (correct choice already — never float). If you'll support multiple currencies eventually, add a `currency` column now rather than retrofitting later.

### 6. Replace bare `ENUM` for order status with room to grow
MySQL `ENUM` alterations (`ALTER TABLE ... MODIFY status ENUM(...)`) are metadata-only in modern MySQL so it's not a huge cost, but a `VARCHAR` + `CHECK` constraint (or a lookup table if you want statuses configurable without a migration) is more portable and easier to extend from application code without a DB migration for every new status value.

### 7. Soft deletes on `item` / `category`
Add `deleted_at TIMESTAMP NULL` (or `is_active BOOLEAN`) instead of hard-deleting. Filter it out in the "get all" queries. This is what prevents "customer's past order references a product that no longer exists" from becoming a 500 error or broken page.

### 8. SKU + product identity
Add a unique `sku VARCHAR` to `item` — internal auto-increment `item_id` is fine as the PK, but real catalogs need a stable, human-referenceable SKU independent of the DB identity (for supplier feeds, returns, support tickets).

### 9. Category hierarchy
Add a nullable self-referencing `parent_category_id` on `category` if nested categories (e.g. "Skin Care > Serums > Vitamin C," which the seed data already implies conceptually with items belonging to both a broad and narrow category) are ever wanted — cheaper to add the column now than migrate a flat structure later.

### 10. Don't expose sequential integer IDs externally (defer, but note it)
Once there's a public API/URLs referencing `order_id`/`customer_id`, sequential integers leak business volume (competitors can estimate order counts) and enable enumeration. Not urgent at prototype stage, but worth a public-facing UUID/ULID column on `orders` before it's internet-facing.

## C. Infra-level scaling (beyond the schema file itself)

- **Transactions around checkout**: order creation + stock decrement + order_item inserts must be one transaction; combine with the optimistic-locking version check from (B.1/B.5) so overselling fails loudly and can be retried, rather than silently succeeding twice.
- **Idempotency**: checkout endpoint should accept an idempotency key so client retries (flaky network, double-click) don't create duplicate orders.
- **Read replicas + caching**: catalog browsing (`/products`, `/category`) is read-heavy and tolerant of slight staleness — good candidate for a read replica and/or Redis cache in front of it once the mock Next.js API routes are replaced with real backend calls (per CLAUDE.md, that swap hasn't happened yet).
- **Search**: MySQL `LIKE`/`WHERE` filtering on product name/description won't scale past a small catalog — plan for a dedicated search index (OpenSearch/Meilisearch/Algolia) once product count and filter complexity grow.
- **Table growth**: `orders`/`order_item` grow unboundedly; plan for time-based partitioning or archival once volume is real (not needed at current scale, just don't paint yourself into a corner with the PK design — the current composite PKs are fine).
- **Zero-downtime migration discipline**: since `ddl-auto: validate` + Flyway is already the pattern, keep following it — add nullable columns first, backfill, then tighten to `NOT NULL` in a follow-up migration, rather than one big blocking `ALTER`.

## Explicitly deferred (per current scope)

Addresses (shipping/billing), payment records (tokenized via a processor, never raw card data), product images, discounts/pricing history, and cart tables are real gaps too, but this pass was scoped to core correctness + scale essentials — flag these as the next tier when ready.
