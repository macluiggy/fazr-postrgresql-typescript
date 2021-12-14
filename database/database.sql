CREATE DATABASE typescriptdatabase;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES
    ('luffy', 'luffy@gmail.com'),
    ('doraemon', 'doraemon@gmail.com');