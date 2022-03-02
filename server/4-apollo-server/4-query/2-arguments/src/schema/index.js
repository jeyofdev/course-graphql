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
        user(id: ID): User
    }
`);

export default schema;
