import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    enum STATUS {
        USER
        ADMIN
        SUPER_ADMIN
    }

    type User {
        id: ID
        name: String
        email: String
        status: STATUS
    }

    type Query {
        users: [User]
        usersByStatus(status: STATUS!): [User]
    }

    type Mutation {
        add(name: String!, email: String!, status: STATUS!): User
    }
`);

export default schema;
