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
        update(id: ID, name: String, email: String): User
        remove(id: ID): User
    }
`;

export default schema;
