import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    type Person {
        name: String
        age: Int
        skills: [String]
    }

    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        person: Person
        users: [User]
    }
`);

export default schema;
