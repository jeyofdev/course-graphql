const schema = `
    type User {
        id: ID
        name: String
        email: String
        posts: [Post]
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

    type Mutation {
        addUser(name: String, email: String): User
        addPost(title: String, content: String, userId: ID): Post
    }
`;

export default schema;
