const schema = `
    scalar DateTime

    type Query {
        id: ID,
        name: String
        createdAt: DateTime
    }
`;

export default schema;
