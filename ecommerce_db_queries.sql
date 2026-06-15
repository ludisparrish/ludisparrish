-- =====================================================================
-- НАБОР SQL-ЗАПРОСОВ ДЛЯ ВЕРИФИКАЦИИ ДАННЫХ В E-COMMERCE БАЗЕ ДАННЫХ
-- Автор: Глеб Лудис (ludisparrish)
-- =====================================================================

SELECT order_id, user_id, total_price, order_status, created_at
FROM orders
WHERE user_id = 4992 AND order_status = 'Processing'
ORDER BY created_at DESC
LIMIT 1;

SELECT product_id, product_name, stock_quantity, warehouse_id
FROM warehouse_stocks
WHERE stock_quantity < 5 AND is_active = 1
ORDER BY stock_quantity ASC;

SELECT u.user_id, u.email, u.user_tier, o.order_id, o.total_price, o.delivery_fee
FROM users u
INNER JOIN orders o ON u.user_id = o.user_id
WHERE u.user_tier = 'VIP' AND o.delivery_fee > 0;
