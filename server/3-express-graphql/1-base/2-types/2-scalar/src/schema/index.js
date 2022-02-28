import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
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
