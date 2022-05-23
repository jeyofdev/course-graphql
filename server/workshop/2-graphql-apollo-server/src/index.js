import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import schemas from './schemas';
import context from './context';

const PORT = 4000;

const server = new ApolloServer({ typeDefs: schemas, resolvers, context });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
