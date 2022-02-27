const schema = `
    enum GENDER {
        male
        female
    }

    type Wand {
        wood: String
        core: String
        length: Float
    }

    interface Character {
        id: ID
        name: String
        gender: GENDER
    }

    type Human implements Character {
        id: ID
        name: String
        gender: GENDER
        dateOfBirth: String
        actor: String
        wand: Wand
    }

    type NoHuman implements Character {
        id: ID
        name: String
        gender: GENDER
        species: String
    }

    type Query {
        characters: [Character]!
    }
`;

export default schema;
