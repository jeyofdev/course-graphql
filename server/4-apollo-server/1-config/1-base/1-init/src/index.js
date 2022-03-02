import { ApolloServer, gql } from 'apollo-server';

const PORT = 4000;

// Set schema
const schema = gql(`
    type Query {
        name: String
        email: String
    }
`);

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

// Init the apollo server
const server = new ApolloServer({ typeDefs: schema, resolvers });

// Run a web server.
server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Running a GraphQL API server at ${url}`);
});
