const { graphql, buildSchema } = require('graphql');

// set schema
const schema = buildSchema(`
    type Query {
        name: String
        email: String
    }
`);

// Resolver function for each API endpoint
const resolvers = {
    name: () => {
        return 'John Doe';
    },
    email: () => {
        return 'john-doe@test.com';
    },
};

// Run the GraphQL query
graphql({
    schema,
    source: '{ name, email }',
    rootValue: resolvers,
}).then((response) => {
    console.log(response);
});
