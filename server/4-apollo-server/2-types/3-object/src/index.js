import { ApolloServer } from 'apollo-server';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

const PORT = 4000;

// Init the apollo server
const server = new ApolloServer({ typeDefs: schema, resolvers });

// Run a web server.
server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Running a GraphQL API server at ${url}`);
});
