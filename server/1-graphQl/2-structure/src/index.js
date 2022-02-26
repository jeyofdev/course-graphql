import { graphql } from 'graphql';
import schema from './schema/index.js';
import resolvers from './resolvers/index.js';

// Run the GraphQL query
graphql({
    schema,
    source: '{ name, email }',
    rootValue: resolvers,
}).then((response) => {
    console.log(response);
});
