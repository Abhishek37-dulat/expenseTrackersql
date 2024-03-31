const express = require("express");
const {
  getAllExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  addExpense,
  totalExpense,
} = require("../controller/expensecontroller.js");

const route = express.Router();

route.get("/", getAllExpense);
route.get("/:id", getExpense);
route.put("/:id", updateExpense);
route.delete("/:id", deleteExpense);
route.post("/", addExpense);
route.get("/all/exp", totalExpense);

module.exports = route;
