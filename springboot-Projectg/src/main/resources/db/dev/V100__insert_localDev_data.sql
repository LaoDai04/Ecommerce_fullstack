INSERT INTO customer (customer_name, email)
VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Michael Johnson', 'michael.johnson@example.com'),
('Emily Williams', 'emily.williams@example.com'),
('David Brown', 'david.brown@example.com'),
('Sarah Davis', 'sarah.davis@example.com'),
('James Miller', 'james.miller@example.com'),
('Olivia Wilson', 'olivia.wilson@example.com'),
('Daniel Moore', 'daniel.moore@example.com'),
('Sophia Taylor', 'sophia.taylor@example.com'),
('Matthew Anderson', 'matthew.anderson@example.com'),
('Ava Thomas', 'ava.thomas@example.com'),
('Christopher Jackson', 'christopher.jackson@example.com'),
('Isabella White', 'isabella.white@example.com'),
('Andrew Harris', 'andrew.harris@example.com'),
('Mia Martin', 'mia.martin@example.com'),
('Joshua Thompson', 'joshua.thompson@example.com'),
('Charlotte Garcia', 'charlotte.garcia@example.com'),
('Ryan Martinez', 'ryan.martinez@example.com'),
('Amelia Robinson', 'amelia.robinson@example.com');


INSERT INTO item (item_name, price, description)
VALUES
('Gentle Facial Cleanser', 12.99, 'A gentle cleanser for everyday use.'),
('Hydrating Face Wash', 14.99, 'Hydrating face wash for dry and normal skin.'),
('Vitamin C Serum', 24.99, 'Brightening serum with vitamin C.'),
('Hyaluronic Acid Serum', 19.99, 'Hydrating serum that helps retain moisture.'),
('Daily Moisturizer', 16.99, 'Lightweight moisturizer for daily use.'),
('Night Repair Cream', 28.99, 'Rich moisturizer designed for nighttime use.'),
('SPF 50 Sunscreen', 18.99, 'Lightweight broad-spectrum sunscreen.'),
('Mineral Sunscreen', 21.99, 'Mineral sunscreen for sensitive skin.'),
('Clay Face Mask', 15.99, 'Clay mask that helps remove excess oil.'),
('Hydrating Sheet Mask', 9.99, 'Hydrating sheet mask for a quick skin boost.'),
('Retinol Night Serum', 29.99, 'Night serum with retinol for skin renewal.'),
('Niacinamide Serum', 17.99, 'Serum designed to help improve skin texture.'),
('Acne Spot Treatment', 11.99, 'Targeted treatment for occasional breakouts.'),
('Exfoliating Toner', 20.99, 'Gentle toner for removing dead skin cells.'),
('Eye Repair Cream', 23.99, 'Moisturizing cream for the eye area.'),
('Lip Repair Balm', 7.99, 'Moisturizing balm for dry lips.'),
('Green Tea Facial Mist', 13.99, 'Refreshing facial mist with green tea extract.'),
('Aloe Vera Gel', 10.99, 'Soothing gel for dry and irritated skin.'),
('Peptide Firming Serum', 31.99, 'Serum formulated to support firmer-looking skin.'),
('Overnight Hydration Mask', 22.99, 'Overnight mask for extra hydration.');


INSERT INTO category (category_name)
VALUES
('Cleansers'),
('Skin Care'),
('Serums'),
('Vitamin C'),
('Moisturizers'),
('Sunscreen'),
('Masks'),
('Retinol'),
('Acne'),
('Exfoliants'),
('Eye Care'),
('Lip Care'),
('New Arrivals');

INSERT INTO item_category (item_id, category_id)
SELECT 1, category_id FROM category WHERE category_name IN ('Cleansers', 'Skin Care')
UNION ALL
SELECT 2, category_id FROM category WHERE category_name IN ('Cleansers', 'Skin Care')
UNION ALL
SELECT 3, category_id FROM category WHERE category_name IN ('Serums', 'Vitamin C')
UNION ALL
SELECT 4, category_id FROM category WHERE category_name IN ('Serums', 'Skin Care')
UNION ALL
SELECT 5, category_id FROM category WHERE category_name IN ('Moisturizers', 'Skin Care')
UNION ALL
SELECT 6, category_id FROM category WHERE category_name IN ('Moisturizers', 'Skin Care')
UNION ALL
SELECT 7, category_id FROM category WHERE category_name IN ('Sunscreen', 'Skin Care')
UNION ALL
SELECT 8, category_id FROM category WHERE category_name IN ('Sunscreen', 'Skin Care')
UNION ALL
SELECT 9, category_id FROM category WHERE category_name IN ('Masks', 'Skin Care')
UNION ALL
SELECT 10, category_id FROM category WHERE category_name IN ('Masks', 'Skin Care')
UNION ALL
SELECT 11, category_id FROM category WHERE category_name IN ('Serums', 'Retinol')
UNION ALL
SELECT 12, category_id FROM category WHERE category_name IN ('Serums', 'Skin Care')
UNION ALL
SELECT 13, category_id FROM category WHERE category_name IN ('Acne', 'Skin Care')
UNION ALL
SELECT 14, category_id FROM category WHERE category_name IN ('Exfoliants', 'Skin Care')
UNION ALL
SELECT 15, category_id FROM category WHERE category_name IN ('Eye Care', 'Skin Care')
UNION ALL
SELECT 16, category_id FROM category WHERE category_name IN ('Lip Care', 'Skin Care')
UNION ALL
SELECT 17, category_id FROM category WHERE category_name IN ('Skin Care', 'New Arrivals')
UNION ALL
SELECT 18, category_id FROM category WHERE category_name IN ('Skin Care', 'New Arrivals')
UNION ALL
SELECT 19, category_id FROM category WHERE category_name IN ('Serums', 'New Arrivals')
UNION ALL
SELECT 20, category_id FROM category WHERE category_name IN ('Masks', 'New Arrivals');