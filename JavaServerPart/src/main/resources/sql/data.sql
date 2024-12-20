 

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

INSERT INTO public."order" (id, client_id, amenities_ids, status, employee_id, date_of_payed, date_of_finish, total_price)
VALUES
    -- Поля date_of_payed и date_of_finish равны NULL
    (1, 1, ARRAY[1,3], 'not paying', 1, NULL, NULL, 15000),
    (2, 2, ARRAY[3,6], 'not paying', 2, NULL, NULL, 20000),
    (3, 3, ARRAY[5,4], 'not paying', 3, NULL, NULL, 10000),

    -- Поле date_of_finish равно NULL
    (4, 9, ARRAY[5,3], 'in_progress', 4, '2024-12-01', NULL, 25000),
    (5, 8, ARRAY[7,9], 'in_progress', 5, '2024-11-25', NULL, 30000),
    (6, 7, ARRAY[3,8], 'in_progress', 6, '2024-11-20', NULL, 22000),

    -- Все поля заполнены
    (7, 4, ARRAY[5,3], 'completed', 7, '2024-11-15', '2024-12-01', 18000),
    (8, 6, ARRAY[8,4], 'completed', 8, '2024-11-10', '2024-11-30', 17000),
    (9, 5, ARRAY[2,1], 'completed', 9, '2024-11-05', '2024-11-25', 21000)

ON CONFLICT (id) DO NOTHING;


INSERT INTO public.client (id, "name", second_name, email, phone, card)
VALUES
    (1, 'Ivan', 'Ivanov', 'ivanov@example.com', '1234567890', '1111-2222-3333-4444'),
    (2, 'Petr', 'Petrov', 'petrov@example.com', '1234567891', '1111-2222-3333-5555'),
    (3, 'Anna', 'Sidorova', 'sidorova@example.com', '1234567892', '1111-2222-3333-6666'),
    (4, 'Olga', 'Smirnova', 'smirnova@example.com', '1234567893', '1111-2222-3333-7777'),
    (5, 'Sergey', 'Sergeev', 'sergeev@example.com', '1234567894', '1111-2222-3333-8888'),
    (6, 'Maria', 'Ivanova', 'ivanova@example.com', '1234567895', '1111-2222-3333-9999'),
    (7, 'Nikolay', 'Fedorov', 'fedorov@example.com', '1234567896', '1111-2222-3333-0000'),
    (8, 'Elena', 'Nikolaeva', 'nikolaeva@example.com', '1234567897', '1111-2222-3333-1111'),
    (9, 'Alexey', 'Alekseev', 'alekseev@example.com', '1234567898', '1111-2222-3333-2222'),
    (10, 'Dmitry', 'Dmitriev', 'dmitriev@example.com', '1234567899', '1111-2222-3333-3333')
ON CONFLICT (id) DO NOTHING;


INSERT INTO public.amenities (id, title, description, "type", materials, products, price)
VALUES
    -- Услуга с типом true (без продуктов)
    (1, 'Системное администрирование', 'Обслуживание серверов и рабочих станций', true, ARRAY[1, 2], NULL, 5000),
    (2, 'Установка кондиционеров', 'Установка и настройка кондиционеров', true, ARRAY[3, 4], NULL, 12000),

    -- Услуга с типом false (с продуктами)
    (3, 'Монтаж сети', 'Монтаж и настройка компьютерных сетей', false, ARRAY[5, 6], ARRAY[1, 2], 8000),
    (4, 'Ремонт серверов', 'Ремонт и модернизация серверов', false, ARRAY[7, 8], ARRAY[3], 10000),
    (5, 'Обновление ПО', 'Обновление операционных систем и программного обеспечения', false, ARRAY[9, 4], ARRAY[4, 5], 6000),
    (6, 'Установка видеонаблюдения', 'Монтаж системы видеонаблюдения для объектов', false, ARRAY[1, 2], ARRAY[6, 7], 15000),
    (7, 'Подключение кондиционера', 'Подключение и настройка кондиционеров', false, ARRAY[3], ARRAY[8], 4000),
    (8, 'Обслуживание IT инфраструктуры', 'Техническая поддержка и обслуживание оборудования', false, ARRAY[4, 5], ARRAY[9, 8], 11000),
    (9, 'Установка серверных систем', 'Установка и настройка серверов для бизнеса', false, ARRAY[6, 7], ARRAY[1], 20000),
    (10, 'Виртуализация серверов', 'Настройка виртуальных серверов и инфраструктуры', false, ARRAY[8, 9], ARRAY[2, 3], 25000)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.provider (id, "name", contact_info, material_id)
VALUES
    (1, 'Tech Solutions', 'techsolutions@example.com', 1),
    (2, 'AirCon Install', 'airconinstall@example.com', 2),
    (3, 'NetWorks Service', 'networks@example.com', 3),
    (4, 'ServerFix', 'serverfix@example.com', 4),
    (5, 'Software Update Co', 'softwareupdate@example.com', 5),
    (6, 'SafeTech Surveillance', 'safetech@example.com', 6),
    (7, 'CoolAir Services', 'coolair@example.com', 7),
    (8, 'IT Support Group', 'itsupport@example.com', 8),
    (9, 'ServerTech Installations', 'servertech@example.com', 9),
    (10, 'VirtualNet Solutions', 'virtualnet@example.com', 10)
ON CONFLICT (id) DO NOTHING;