DROP TABLE IF EXISTS users CASCADE;
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

DROP TABLE IF EXISTS cuisines CASCADE;
-- CREATE CUISINES
CREATE TABLE cuisines (
  id SERIAL PRIMARY KEY,
  cuisine VARCHAR(255) NOT NULL,
  created_at DATE NOT NULL
);

DROP TABLE IF EXISTS user_cuisines CASCADE;
-- CREATE USER CUISINES
CREATE TABLE user_cuisines (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  choice1 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
  choice2 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
  choice3 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
  created_at timestamp default current_timestamp
);


-- DROP TABLE IF EXISTS matches CASCADE;
-- -- CREATE matches
-- CREATE TABLE matches (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   choice1 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
--   choice2 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
--   choice3 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
--   match BOOLEAN NOT NULL DEFAULT FALSE,
--   created_at timestamp default current_timestamp
-- );