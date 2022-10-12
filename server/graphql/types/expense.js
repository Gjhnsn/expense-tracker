import { gql } from "apollo-server-express";

export const expense = gql`
    type Expense {
        id: ID!
        name: String!
        dueDate: String
        recurring: Boolean
        amount: String!
    }

    input ExpenseInput {
        expenseId: ID
        name: String!
        dueDate: String
        recurring: Boolean
        amount: String!
    }
`