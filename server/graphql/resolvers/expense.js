import { UserInputError } from "apollo-server-express";
import Expense from "../../models/expense.js";

export default {
  Query: {
    async getExpenses() {
      try {
        const expenses = await Expense.find();
        return expenses;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getSingleExpense(_, { id }) {
      try {
        const expense = await Expense.findById(id);
        return expense;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async addExpense(
      _,
      { expenseInput: { name, dueDate, amount, recurring } }
    ) {
      // check for duplicate entries
      const expenseName = await Expense.findOne({ name });
      if (expenseName) {
        throw new UserInputError("Expense with that name already exists", {
          errors: { title: "Expense already exists" },
        });
      }
      // create new expense
      const newExpense = new Expense({
        name,
        dueDate,
        amount,
        recurring,
      });
      const res = await newExpense.save();
      return res;
    },

    async updateExpense(
      _,
      { expenseInput: { expenseId, name, dueDate, amount, recurring } }
    ) {
      // check for duplicate entries
      const expenseName = await Expense.findOne({ name });
      if (expenseName && expenseName.id !== expenseId) {
        throw new UserInputError("Expense with that name already exists", {
          errors: { title: "Expense already exists" },
        });
      }

      const expenseObj = { name, dueDate, amount, recurring };

      // update expense
      const res = await Expense.findByIdAndUpdate(
        { _id: expenseId },
        expenseObj,
        { new: true }
      );
      return res;
    },

    async deleteExpense(_, { expenseId }) {
      const res = await Expense.findByIdAndDelete(expenseId);
      return res;
    },
  },
};
