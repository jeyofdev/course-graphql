const schema = `
    type User {
        id: ID
        name: String
        email: String
    }

    type Post {
        id: ID
        title: String
        content: String
        user: User
    }

    type Query {
        users: [User]
        posts: [Post]
    }
`;

export default schema;
