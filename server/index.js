require('dotenv').config();
const express = require("express");
// const cors = require("cors")
const db = require("./src/db");

const app = express();
const morgan =require("morgan");
app.use(morgan("dev"));
const port = process.env.PORT || 3001;

// const days = require('./src/routes/days');

// Routes
// app.use('/api', days(db));

// Main Route
app.get("/", (req, res) => {
  res.send(
    "Foodie connect"
  );
});

// Server connection
app.listen(port, () => {
  console.log(`server is up listening on port ${port}`)})
;
