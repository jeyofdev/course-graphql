import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    scalar DateTime

    type Query {
        id: ID,
        name: String
        createdAt: DateTime
    }
`);

export default schema;
