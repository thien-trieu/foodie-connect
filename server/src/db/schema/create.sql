DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS foods CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) DEFAULT 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true',
  bio VARCHAR(100) DEFAULT '',
  created_at timestamp default current_timestamp
);