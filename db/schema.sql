--DROP DATABASE fullstack_employees;
--CREATE DATABASE fullstack_employees;
DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
    id serial PRIMARY KEY,
    "name" text NOT NULL UNIQUE,
    birthday date NOT NULL,
    salary integer NOT NULL
);


