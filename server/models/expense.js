import mongoose from "mongoose";
const { model, Schema } = mongoose;

const expenseSchema = new Schema({
    name: String,
    dueDate: String,
    recurring: Boolean,
    amount: String,
})

export default model("Expense", expenseSchema);