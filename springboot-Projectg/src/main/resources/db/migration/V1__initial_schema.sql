CREATE TABLE customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    name VARCHAR(100),
    email VARCHAR(150) UNIQUE NOT NULL,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE item (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_order_customer
        FOREIGN KEY (customer_id)
        REFERENCES customer(customer_id)
);

CREATE TABLE item_category (
    item_id INT NOT NULL,
    category_value VARCHAR(255) NOT NULL,

    CONSTRAINT fk_item_category_item
        FOREIGN KEY (item_id)
        REFERENCES item(item_id)
);

CREATE TABLE order_item (
    order_id INT NOT NULL,
    item_id INT NOT NULL,

    CONSTRAINT pk_order_item
        PRIMARY KEY (order_id, item_id),

    CONSTRAINT fk_order_item_order
        FOREIGN KEY (order_id)
        REFERENCES orders(order_id),

    CONSTRAINT fk_order_item_item
        FOREIGN KEY (item_id)
        REFERENCES item(item_id)
);
-- Customer can have many Order: One-to-Many
-- many Order can belong to a Customer: Many-to-One
-- one Order can contain many OrderItem: One-to-Many
-- an Item can be in many OrderItem: One-to-Many
-- Order ↔ Item: Many-to-Many, through order_item
-- An Item can have many category values: One-to-Many

-- insert test records separately later copy below
-- INSERT INTO customer (customer_name, name, email)
-- VALUES
--     ('john_doe', 'John Doe', 'john@example.com'),
--     ('jane_smith', 'Jane Smith', 'jane@example.com');

-- INSERT INTO item (item_name, price, description)
-- VALUES
--     ('Bath Towel', 14.99, 'Soft cotton bath towel'),
--     ('Shower Curtain', 24.99, 'Water-resistant shower curtain'),
--     ('Kitchen Sponge', 5.99, 'Multi-purpose cleaning sponge');