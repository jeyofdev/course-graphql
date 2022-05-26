import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import Skill from './models/Skill';

import Wilder from './models/Wilder';
import WilderResolver from './resolvers/WilderResolver';

dotenv.config();

const runServer = async () => {
    await createConnection({
        type: 'sqlite',
        database: './sqlite.db',
        entities: [Wilder, Skill],
        synchronize: true,
        logging: true,
    });

    // eslint-disable-next-line no-console
    console.log('Connected to database');

    // await WilderModel.init();

    const schema = await buildSchema({ resolvers: [WilderResolver] });
    const server = new ApolloServer({ schema });

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
};

runServer();
