import { gql } from 'apollo-server-express';

// Set schema
const schema = gql(`
    type Query {
        name: String
        email: String
    }
`);

export default schema;
