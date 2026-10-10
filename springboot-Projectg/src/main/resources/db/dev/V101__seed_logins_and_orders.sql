-- Dev-only logins. Password for both: devpass123
UPDATE customer
SET password_hash = '$2a$10$cWpFDnQmOFg/36QcceLkJ.FgldqR0PA4yNxuGBEGsIj5IV70LuqP2'
WHERE email IN ('john.doe@example.com', 'jane.smith@example.com');

UPDATE customer SET role = 'ADMIN' WHERE email = 'jane.smith@example.com';

-- John Doe (CUSTOMER): 3 orders
INSERT INTO orders (customer_id, status, total)
SELECT customer_id, 'PAID', 37.98 FROM customer WHERE email = 'john.doe@example.com';
SET @o := LAST_INSERT_ID();
INSERT INTO order_item (order_id, item_id, quantity, unit_price) VALUES
(@o, 1, 1, 12.99),
(@o, 3, 1, 24.99);

INSERT INTO orders (customer_id, status, total)
SELECT customer_id, 'SHIPPED', 45.97 FROM customer WHERE email = 'john.doe@example.com';
SET @o := LAST_INSERT_ID();
INSERT INTO order_item (order_id, item_id, quantity, unit_price) VALUES
(@o, 7, 2, 18.99),
(@o, 16, 1, 7.99);

INSERT INTO orders (customer_id, status, total)
SELECT customer_id, 'PENDING', 29.99 FROM customer WHERE email = 'john.doe@example.com';
SET @o := LAST_INSERT_ID();
INSERT INTO order_item (order_id, item_id, quantity, unit_price) VALUES
(@o, 11, 1, 29.99);

-- Jane Smith (ADMIN): 1 order
INSERT INTO orders (customer_id, status, total)
SELECT customer_id, 'PAID', 46.96 FROM customer WHERE email = 'jane.smith@example.com';
SET @o := LAST_INSERT_ID();
INSERT INTO order_item (order_id, item_id, quantity, unit_price) VALUES
(@o, 5, 1, 16.99),
(@o, 10, 3, 9.99);

-- Michael Johnson (no login): 1 order, to prove /orders/me doesn't leak other people's orders
INSERT INTO orders (customer_id, status, total)
SELECT customer_id, 'CANCELLED', 22.99 FROM customer WHERE email = 'michael.johnson@example.com';
SET @o := LAST_INSERT_ID();
INSERT INTO order_item (order_id, item_id, quantity, unit_price) VALUES
(@o, 20, 1, 22.99);