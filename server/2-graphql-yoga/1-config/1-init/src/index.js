import { GraphQLServer } from 'graphql-yoga';

const PORT = 4000;

// Set schema
const schema = `
    type Query {
        name: String
        email: String
    }
`;

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
