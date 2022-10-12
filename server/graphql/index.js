import resolvers from './resolvers.js';
import typeDefs from './schema.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { expense } from './types/expense.js';

// bundle schema and resolvers to import into index
export default makeExecutableSchema({
    typeDefs: [
        typeDefs,
        expense
    ],
    resolvers,
});