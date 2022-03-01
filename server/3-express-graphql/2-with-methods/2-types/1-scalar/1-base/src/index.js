import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/index.js';

const app = express();
const PORT = 4000;

// Init api
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

// Listen the server
app.listen(PORT, () => {
    console.log(`Running a GraphQL server at http://localhost:${PORT}/graphql`);
});
