import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        user(id: ID): User
    }
`);

export default schema;
