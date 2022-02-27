const schema = `
    type User {
        name: String
        email: String
        age: Int
    }

    type Developer {
        profile: User
        note: Float
    }

    type Query {
        user: User
        person: Developer
    }
`;

export default schema;
