import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        getExpenses: [Expense]
        getSingleExpense(id: String): Expense
    }

    type Mutation {
        addExpense(expenseInput: ExpenseInput): Expense!
        updateExpense(expenseInput: ExpenseInput): Expense!
        deleteExpense(expenseId: String): Expense!
    }
`
export default typeDefs;