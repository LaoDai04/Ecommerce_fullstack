# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a monorepo with two independently-run projects and no shared tooling/root package.json:

- `frontend-nextjs/` — Next.js 16 (App Router) + React 19 storefront, TypeScript, Tailwind CSS 4 + DaisyUI, MUI, TanStack Query.
- `springboot-Projectg/` — Spring Boot 3.4 REST API (Java 17), Maven, MySQL via JPA/Hibernate + Flyway.
- `docker-compose.yml` (repo root) — local MySQL instance for the backend.

They are developed and started separately; there is no root-level build script that runs both.

## Common commands

### Frontend (`frontend-nextjs/`)

```bash
pnpm dev      # start dev server (Turbopack), http://localhost:3000
pnpm build    # production build
pnpm start    # run a production build
pnpm lint     # eslint
```

The repo has both `pnpm-lock.yaml` and `package-lock.json` — use `pnpm` (the lockfile that's actually maintained; `package-lock.json` is stale).

There is no test runner configured in `package.json`.

### Backend (`springboot-Projectg/`)

```bash
# from repo root, bring up local MySQL (maps host 3307 -> container 3306)
docker compose up -d

# from springboot-Projectg/
./mvnw spring-boot:run          # macOS/Linux
.\mvnw.cmd spring-boot:run       # Windows

./mvnw test                      # run tests
./mvnw test -Dtest=ClassName#methodName   # run a single test

./mvnw package                   # build target/myproject-0.0.1-SNAPSHOT.jar (used by Dockerfile)
```

Swagger UI: `http://localhost:8080/swagger-ui/index.html`. OpenAPI JSON: `http://localhost:8080/v3/api-docs`.

The `dev` Spring profile reads DB connection info from `springboot-Projectg/.env` (`DB_HOST_DEV`, `DB_PORT_DEV`, `DB_NAME_DEV`, `DB_USERNAME_DEV`, `DB_PASSWORD_DEV` — these match the `docker-compose.yml` MySQL container: port `3307`, db `ecommerce_test`, user `root`/`devdatabase`). The `prod` profile reads the non-`_DEV`-suffixed equivalents instead. Activate a profile with `spring.profiles.active` (env var `SPRING_PROFILES_ACTIVE` or `--spring.profiles.active=dev`).

## Backend architecture

Package root: `com.example.businessapp`. Layering is strict Controller → Service (`*Handler`) → Repository (Spring Data JPA) → `model` (JPA entities), one set per domain: `Item`, `Category`, `Customer`, `Order`/`OrderItem`. Follow this same layering for any new domain rather than putting logic directly in controllers.

- Controllers are thin REST endpoints under `controller/`: `/products` (Item), `/category`, `/customers`, `/orders`. Only `CustomerController` currently has POST/by-id; the others are read-only (`GET` all) — this is prototype-stage, expect gaps.
- CORS is locked down in `config/ConfigurationWeb.java` to `http://localhost:3000` (the Next.js dev origin) with `GET/POST/PUT/DELETE` — update this if the frontend origin/port changes.
- Schema is owned by Flyway migrations in `src/main/resources/db/migration/` (`V1__initial_schema.sql` defines `customer`, `item`, `orders`, `category`, `item_category` (M:N join), `order_item` (M:N join with `quantity`/`unit_price`)). `hibernate.ddl-auto` is `validate` — schema changes must go through a new Flyway migration, never by editing entities alone. `src/main/resources/db/dev/` holds dev-only seed migrations (`V100__insert_localDev_data.sql`), wired in only for the `dev` profile.
- Entity relationships: Customer 1—N Order; Order N—1 Customer; Order N—N Item via `OrderItem` (composite key `OrderItemId`); Item N—N Category via `item_category`.

## Frontend architecture

App Router structure under `src/app/`, shared UI in `src/components/`, data-fetching hooks in `src/hooks/`, path alias `@/*` → `src/*`.

- **Data fetching pattern**: each resource has a hook in `src/hooks/` (`useGetItems`, `useGetCategory`) that wraps TanStack Query's `useQuery` and calls a same-origin Next.js Route Handler (`src/app/api/products/route.ts`, `src/app/api/category/route.ts`) — the hooks never call the Spring Boot backend directly. `QueryClientProvider` is set up once in `src/app/providers/Providers.tsx` and wired into the root layout.
- **The route handlers under `src/app/api/**` are currently mock APIs** built with `@faker-js/faker`, generating fake products/categories in memory — they are not yet proxying to the real Spring Boot backend on `:8080`. When wiring real data, this is the layer to replace (keep the same route paths/response shapes so hooks/components don't need to change).
- `src/data/api/products/route.ts` is a stale, fully-commented-out leftover mock at a path Next.js doesn't route (only files under `src/app/` are routes) — don't confuse it with the live `src/app/api/products/route.ts`; safe to ignore or delete.
- Category filtering flows through the URL: `src/app/products/page.tsx` reads/writes the `categoryId` query param (comma-separated ids) via `useSearchParams`/`router.push`, and `useGetItems` reads that same param to build its fetch URL — this is the pattern to extend for additional filters/sort.
- Root layout (`src/app/layout.tsx`) always wraps pages in `Providers` → `Header` → `CustomMainPageLayout`; page components under `src/app/*/page.tsx` render inside that fixed shell.
- Styling mixes Tailwind utility classes (incl. arbitrary values like `bg-[#e0f1d8]`) with MUI components (`sx` / `!important`-prefixed Tailwind overrides for MUI internals) and DaisyUI — expect this mix rather than picking one system when editing existing pages.
