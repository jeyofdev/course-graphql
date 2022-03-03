import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import { createServer } from 'http';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

const PORT = 4000;

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
