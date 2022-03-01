import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();
const PORT = 4000;

// Set schema
const schema = buildSchema(`
    type Query {
        name: String
        email: String
    }
`);

// Resolver function for each API endpoint
const resolvers = {
    name: () => {
        return 'John Doe';
    },
    email: () => {
        return 'john-doe@test.com';
    },
};

// Init api
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

// Listen the server
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`);
