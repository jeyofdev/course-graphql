const schema = `
    type Person {
        name: String
        age: Int
        skills: [String]
    }

    type User {
        id: ID
        name: String
        email: String
    }

    type Query {
        person: Person
        users: [User]
    }
`;

export default schema;
