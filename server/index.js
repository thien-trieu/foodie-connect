require('dotenv').config();

// Creating Routes Here
const authRoutes = require('./routes/auth.js')


const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const cors = require('cors'); 

const app = express(); // Starting APP with Express Server

const port = process.env.PORT || 3001;


app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(cors()); // cross origin requests
app.use(express.json()); // allow requests to include json body
app.use(express.urlencoded({extended:false})); //body parser

// ROOT ROUTE
app.get('/', (req, res) => {
  res.send('Hello World')
})

// ALL OTHER ROUTES
app.use('/auth', authRoutes )

// Listen to server to ensure APP has started
app.listen(port, () => console.log(`App listening on port ${port}`));