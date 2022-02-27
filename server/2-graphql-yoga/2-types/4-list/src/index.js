import { GraphQLServer } from 'graphql-yoga';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

const PORT = 4000;

// Init api
const server = new GraphQLServer({ typeDefs: schema, resolvers });

// Listen the server
server.start(({ port: PORT }) => {
    console.log(`Running a GraphQL API server at http://localhost:${PORT}`);
});
