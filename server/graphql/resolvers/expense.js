import Expense from "../../models/expense.js";

export default {
    Query: {
        async getExpenses() {
            const expenses = await Expense.find();
            return expenses;
        }
    },
    Mutation: {
        async addExpense(_, { expenseInput: { name, dueDate, amount, recurring }}) {
            const newExpense = new Expense({
                name,
                dueDate,
                amount,
                recurring
            });
            const res = await newExpense.save();
            return res;
        }
    }
}