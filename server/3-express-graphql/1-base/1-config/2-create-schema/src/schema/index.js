import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
    type Query {
        name: String
        email: String
    }
`);

export default schema;
