import { ApolloServer, gql } from 'apollo-server';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';
import context from './context/index.js';

const PORT = 4000;

// Init api
const server = new ApolloServer({
    cors: true,
    typeDefs: schema,
    resolvers,
    context,
});

// Listen the server
server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
