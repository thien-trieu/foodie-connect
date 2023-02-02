require('dotenv').config();
const { db } = require('./index');

const schemas = require('./schema/create');
const seeds = require('./schema/seeds');

db.connect();

const promises = [
  db.query(schemas),
  db.query(seeds)
];

Promise.all(promises)
  .then(() => console.log('DB reset completed!'))
  .then(() => db.end())
  .catch(err => console.log('Failed to reset', err));
