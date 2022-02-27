const schema = `
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        users: [User]
    }

    type Mutation {
        add(name: String, email: String): User
    }
`;

export default schema;
