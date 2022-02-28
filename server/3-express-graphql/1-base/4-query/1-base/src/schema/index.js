import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        users: [User]
    }
`);

export default schema;
