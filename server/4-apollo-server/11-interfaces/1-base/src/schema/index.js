import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    enum GENDER {
        male
        female
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
    }

    type NoHuman implements Character {
        id: ID
        name: String
        gender: GENDER
        species: String
    }

    type Query {
        humans: [Human]!
        noHumans: [NoHuman]!
    }
`);

export default schema;
