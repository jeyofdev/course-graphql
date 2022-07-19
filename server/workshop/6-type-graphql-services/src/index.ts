import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Container } from 'typedi';
import WilderResolver from './resolvers';

dotenv.config();

mongoose
    .connect(`${process.env.MONGO_URI}`, {
        autoIndex: true,
    })
    .then(() => console.log('Connecté à la base de données'))
    .catch((err: any) => console.log(err));

const main = async () => {
    const schema = await buildSchema({
        resolvers: [WilderResolver],
        container: Container,
    });

    const apolloServer = await new ApolloServer({ schema });
    apolloServer.start().then(() => {
        const app = Express();
        apolloServer.applyMiddleware({ app });

        app.listen(4000, () => {
            console.log('Serveur démarré sur  http://localhost:4000/graphql');
        });
    });
};

main();
