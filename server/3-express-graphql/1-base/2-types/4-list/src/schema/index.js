import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
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
