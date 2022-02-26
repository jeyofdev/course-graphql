const schema = `
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        users: [User]
    }
`;

export default schema;
