import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    type User {
        name: String
        email: String
        age: Int
    }

    type Developer {
        profile: User
        note: Float
    }

    type Query {
        user: User
        person: Developer
    }
`);

export default schema;
