const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieSession = require('cookie-session');

const { db } = require('./src/db');
const routes = require('./src/routes');

require('dotenv').config();


// ----------------------- SETUP AND MIDDLEWARES
db.connect();
const app = express();

app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body
app.use(cors()); // cross origin requests
app.use(express.urlencoded()); //body parser

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World')
})

// ----------------------- LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}`));

app.use(cookieSession({
  name: 'session',
  keys: ['whatismysecretkeygoingtobe', 'imnotsurewhatitsgoingtobe']
}));

// ----------------------- ROUTES / ENDPOINTS
app.use('/', routes);

module.exports = app;

