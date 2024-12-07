
CREATE TABLE IF NOT EXISTS public.client (
    id bigint PRIMARY KEY,
    "name" VARCHAR(100) ,
    second_name VARCHAR(100) ,
    email VARCHAR(255) ,
    phone VARCHAR(15) ,
    card VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS public.Clientamenities (
    id bigint PRIMARY KEY,
    title VARCHAR(255),
    description varchar(255),
    "type" BOOLEAN,
    materials integer[],
    products integer[],
    price integer
);

-- Создание таблицы material
CREATE TABLE IF NOT EXISTS public.material (
    id bigint PRIMARY KEY,
    title VARCHAR(255),
    price INTEGER,
    warehouse_id bigint,
    count_in_warehouse INTEGER
);

CREATE TABLE IF NOT EXISTS public.product (
    id bigint PRIMARY KEY,
    title VARCHAR(255),
    price integer
);


create table if not exists public.provider(
    id bigint primary key,
    "name" varchar(255),
    contact_info varchar(255),
    material_id bigint
);

-- Создание таблицы order
CREATE TABLE IF NOT EXISTS public."order" (
    id bigint PRIMARY KEY,
    client_id bigint,
    amenities_id bigint,
    status varchar(255),
    employee_id bigint,
    date_of_payed varchar(30),
    date_of_finish varchar(30),
    total_price integer

);


create table if not exists public.employee(
    id bigint primary key,
    total_name varchar(255),
    contact_info varchar(255),
    salary integer,
    position varchar(255),
    count_finish integer
);

create table if not exists public.provider_order (
    id bigint primary key,
    material_id bigint,
    status varchar(30),
    date_of_receive varchar(255),
    total_price integer
);

create table if not exists public.materials_turnover(
    id bigint primary key,
    material_id bigint,
    count integer,
    "type" varchar(255)
);