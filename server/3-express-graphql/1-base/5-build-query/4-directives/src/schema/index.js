import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
        pet: String
        petName: String
    }

    type Query {
        users: [User]
        user(id: ID): User
    }
`);

export default schema;
