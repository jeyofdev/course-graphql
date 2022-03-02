import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
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
