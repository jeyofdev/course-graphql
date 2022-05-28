import { gql } from '@apollo/client';

export const CREATE_WILDER = gql`
    mutation CreateWilder($name: String!, $city: String!) {
        createWilder(name: $name, city: $city) {
            id
        }
    }
`;

export const DELETE_WILDER = gql`
    mutation Mutation($deleteWilderId: ID!) {
        deleteWilder(id: $deleteWilderId) {
            id
            name
            city
            skills {
                id
                title
                votes
            }
        }
    }
`;
