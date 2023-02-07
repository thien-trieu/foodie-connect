// const { db } = require('../db');

// const createUser = (name, email, password, location) => {
//   return db
//     .query(
//       'INSERT INTO users (name, email, password, location) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, email, password, location]
//     )
//     .then(data => data.rows[0])
//     .catch(err => console.error(err.stack));
// };

// const getAll = () => {
//   return db
//     .query('SELECT * FROM users')
//     .then(data => data.rows)
//     .catch(err => console.error(err.stack));
// };


// const getByEmail = email => {
//   return db
//     .query('SELECT * FROM users WHERE email = $1', [email])
//     .then(data => data.rows[0])
//     .catch(err => console.error(err.stack));
// };

// // const getById = id => {
// //   return db
// //     .query('SELECT * FROM fruits WHERE id = $1', [id])
// //     .then(data => data.rows[0])
// //     .catch(err => console.error(err.stack));
// // };

// // const update = (name, color, emoji, id) => {
// //   return db
// //     .query(
// //       'UPDATE fruits SET name = $1, color = $2, emoji = $3 WHERE id = $4 RETURNING *',
// //       [name, color, emoji, id]
// //     )
// //     .then(data => data.rows[0])
// //     .catch(err => console.error(err.stack));
// // };

// // const remove = id => {
// //   return db
// //     .query('DELETE FROM fruits WHERE id = $1', [id])
// //     .then(data => data.rows)
// //     .catch(err => console.error(err.stack));
// // };

// module.exports = { getAll, createUser, getByEmail };