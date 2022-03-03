import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import { createServer } from 'http';

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

async function startApolloServer() {
    // Create server with Express
    const app = express();
    const httpServer = createServer(app);

    // Init the apollo server
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: {},
    });

    // More logic for integrating with Express
    await server.start();
    server.applyMiddleware({
        app,
        path: '/',
    });

    // Run a web server
    await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
    console.log(
        `Running a GraphQL API server at http://localhost:4000${server.graphqlPath}`
    );
}

startApolloServer();
