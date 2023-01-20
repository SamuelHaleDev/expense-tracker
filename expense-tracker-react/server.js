const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");

dotenv.config({ path: "./config/config.env" }); // tell dot env which is a global variable package manager where our port constant is

const transactions = require("./routes/transactions");

const app = express(); // Creates an express app object

app.use("/api/v1/transactions", transactions); // when we make a request to the first parameter it should re route to our transactions.js file

const PORT = process.env.PORT || 5000; // uses our config to load our global variables and gets our port constant

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
); // Starts the express app on a specified port
