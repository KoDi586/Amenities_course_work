INSERT INTO public.employee (id, total_name, contact_info, salary, position, count_finish)
VALUES
    (1, 'Ivan Ivanov', '+7 (999)-99-99', 50000, 'junior', 2),
    (2, 'Petr Petrov', '+7 (999)-99-99', 70000, 'middle', 6),
    (3, 'Anna Sidorova', '+7 (999)-99-99', 90000, 'senior', 27),
    (4, 'Olga Smirnova', '+7 (999)-99-99', 55000, 'junior', 5),
    (5, 'Sergey Sergeev', '+7 (999)-99-99', 75000, 'middle', 8),
    (6, 'Maria Ivanova', '+7 (999)-99-99', 95000, 'senior', 29),
    (7, 'Nikolay Fedorov', '+7 (999)-99-99', 52000, 'junior', 9),
    (8, 'Elena Nikolaeva', '+7 (999)-99-99', 72000, 'middle', 11),
    (9, 'Alexey Alekseev', '+7 (999)-99-99', 98000, 'senior', 66)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.material (id, title, price, warehouse_id, count_in_warehouse)
VALUES
    (1, 'Кабель витая пара Cat5e', 15, 1, 100),
    (2, 'Маршрутизатор MikroTik hAP', 6000, 1, 20),
    (3, 'Жесткий диск SSD 1TB', 7500, 1, 15),
    (4, 'Крепеж для кондиционеров', 500, 2, 50),
    (5, 'Трубка медная для фреона', 200, 2, 30),
    (6, 'Сплит-система LG 12BTU', 25000, 2, 10),
    (7, 'Шуруповерт Bosch', 5000, 3, 5),
    (8, 'Перфоратор Makita', 7500, 3, 3),
    (9, 'Удлинитель 5 м', 300, 1, 50),
    (10, 'Компрессор для установки кондиционеров', 15000, 2, 2)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.product (id, title, price)
VALUES
    (1, 'Услуги системного администратора (час)', 1500),
    (2, 'Установка кондиционера', 10000),
    (3, 'Настройка серверов', 25000),
    (4, 'Прокладка сетей (100 м)', 5000),
    (5, 'Обслуживание кондиционеров', 5000),
    (6, 'Установка видеонаблюдения (1 камера)', 8000),
    (7, 'Монтаж сетевого оборудования', 7000),
    (8, 'Ремонт сплит-систем', 12000),
    (9, 'Консультация по IT-вопросам (час)', 2000),
    (10, 'Аудит IT-инфраструктуры', 30000)

ON CONFLICT (id) DO NOTHING;
