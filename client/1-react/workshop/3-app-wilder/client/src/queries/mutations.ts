import { gql } from '@apollo/client';

export const CREATE_WILDER = gql`
    mutation createWilder(
        $name: String!
        $city: String!
        $skills: [SkillInput!]!
        $content: String!
    ) {
        createWilder(
            name: $name
            city: $city
            skills: $skills
            content: $content
        ) {
            _id
            name
            city
            content
            skills {
                votes
                title
            }
        }
    }
`;

export const UPDATE_WILDER = gql`
    mutation updateWilder(
        $id: ObjectId!
        $name: String
        $city: String
        $content: String
    ) {
        updateWilder(id: $id, name: $name, city: $city, content: $content) {
            _id
            name
            city
            content
            skills {
                votes
                title
            }
        }
    }
`;

export const DELETE_WILDER = gql`
    mutation removeWilder($id: String!) {
        removeWilder(wilderId: $id) {
            _id
            name
            city
            content
            skills {
                title
                votes
            }
        }
    }
`;
