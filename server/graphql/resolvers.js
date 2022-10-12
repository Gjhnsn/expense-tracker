import expenseResolvers from './resolvers/expense.js'

export default {
    Query: {
        ...expenseResolvers.Query
    },
    Mutation: {
        ...expenseResolvers.Mutation
    }
}