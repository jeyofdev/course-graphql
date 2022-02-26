import { GraphQLServer } from 'graphql-yoga';
import schema from './schema/index.js';

const PORT = 4000;

// Resolver function for each API endpoint
const resolvers = {
    Query: {
        name: () => {
            return 'John Doe';
        },
        email: () => {
            return 'john-doe@test.com';
        },
    },
};

// Init api
const server = new GraphQLServer({ typeDefs: schema, resolvers });

// Listen the server
server.start(({ port: PORT }) => {
    console.log(`Running a GraphQL API server at http://localhost:${PORT}`);
});
