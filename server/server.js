const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieSession = require('cookie-session');

const { db } = require('./src/db');
const routes = require('./src/routes');

// ----------------------- SETUP AND MIDDLEWARES
db.connect();
const app = express();

app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body

app.use(cookieSession({
  name: 'session',
  keys: ['whatismysecretkeygoingtobe', 'imnotsurewhatitsgoingtobe']
}));

// ----------------------- ROUTES / ENDPOINTS
app.use('/', routes);

module.exports = app;