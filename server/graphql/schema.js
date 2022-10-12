import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type Query {
        getExpenses: [Expense]
    }

    type Mutation {
        addExpense(expenseInput: ExpenseInput): Expense!
    }
`
export default typeDefs;