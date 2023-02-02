// Database connections
const { Pool } = require('pg');

const {PGHOST, PGUSER, PGPASSWORD, PGDATABASE, PGPORT} = process.env;

console.log(PGUSER)
const pool = new Pool({
	user: PGUSER,
	host: PGHOST,
	password: PGPASSWORD,
	port: PGPORT,
	database: PGDATABASE,
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = pool;