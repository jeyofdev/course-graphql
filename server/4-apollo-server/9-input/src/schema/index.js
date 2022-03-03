import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    type User {
        id: ID
        name: String
        email: String
    }

    input UserInput {
        name: String
        email: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        add(user: UserInput!): User
        update(id: ID!, user: UserInput): User
    }
`);

export default schema;
