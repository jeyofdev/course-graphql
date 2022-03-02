import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    type Query {
        id: ID,
        name: String
        email: String
        age: Int
        note: Float
        isDeveloper: Boolean
    }
`);

export default schema;
