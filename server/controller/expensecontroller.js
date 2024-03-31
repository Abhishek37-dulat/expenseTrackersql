const Expense = require("../models/expense.js");
const { v4: uuidv4 } = require("uuid");

const getAllExpense = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => console.log(err));
};

const getExpense = (req, res, next) => {
  Expense.findByPk(req.params.id).then((result) => {
    console.log(result);
    res.send(result);
  });
};

const updateExpense = (req, res, next) => {
  const title = req.body.title;
  const amount = req.body.amount;
  Expense.findByPk(req.params.id)
    .then((exp) => {
      exp.title = title;
      exp.amount = amount;
      return exp.save();
    })
    .then((result) => {
      console.log("UPDATED Expense!");
      res.send(result);
    })
    .catch((err) => console.log("UPDATE: ", err));
};

const deleteExpense = async (req, res, next) => {
  try {
    const exp = await Expense.findByPk(req.params.id);
    await exp.destroy();
    res.send(bexp);
  } catch (err) {
    res.send(err);
  }
};

const addExpense = (req, res, next) => {
  const title = req.body.title;
  const amount = req.body.amount;

  Expense.create({
    title: title,
    amount: amount,
  })
    .then((result) => {
      // console.log(result);
      console.log("Expensed");
      res.send(result);
    })
    .catch((err) => {
      console.log("ADDING:  ", err);
      res.send(err);
    });
};

const totalExpense = async (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      let totalsum = 0;
      for (let i = 0; i < result.length; i++) {
        totalsum += result[i].amount;
      }
      res.send({ total: totalsum });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getAllExpense,
  getExpense,
  updateExpense,
  deleteExpense,
  addExpense,
  totalExpense,
};
