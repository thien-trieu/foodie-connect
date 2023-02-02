module.exports = `DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS choices CASCADE;
DROP TABLE IF EXISTS user_choices CASCADE;
DROP TABLE IF EXISTS matches CASCADE;


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


CREATE TABLE choices (
  id SERIAL PRIMARY KEY,
  choice VARCHAR(255) NOT NULL
);

CREATE TABLE user_choices (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  choice INTEGER REFERENCES choices(id) ON DELETE CASCADE,
  created_at timestamp default current_timestamp
);
`;

// -- CREATE TABLE matches (
//   --   id SERIAL PRIMARY KEY,
//   --   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   --   choice1 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
//   --   choice2 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
//   --   choice3 INTEGER REFERENCES cuisines(id) ON DELETE CASCADE,
//   --   match BOOLEAN NOT NULL DEFAULT FALSE,
//   --   created_at timestamp default current_timestamp
//   -- );