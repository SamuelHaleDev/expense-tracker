const express = require("express");
const router = express.Router();
const { getTransactions } = require("../controllers/transactions");

router.route("/").get(getTransactions); // Making a get to a / after localhost will redirect to getTransactions in controllers/transaction

module.exports = router;
