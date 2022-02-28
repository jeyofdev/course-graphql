import { buildSchema } from 'graphql';

// Set schema
const schema = buildSchema(`
    "comment on one line"
    type Query {
        """
        Comment
        multiline
        """
        id: ID,
        name: String
        email: String
        age: Int
        note: Float
        isDeveloper: Boolean
    }
`);

export default schema;
