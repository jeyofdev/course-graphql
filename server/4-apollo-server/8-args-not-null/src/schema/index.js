import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        add(name: String!, email: String!): User
    }
`);

export default schema;
