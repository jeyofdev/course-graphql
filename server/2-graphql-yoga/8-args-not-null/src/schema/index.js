const schema = `
    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        add(name: String!, email: String!): User
    }
`;

export default schema;
