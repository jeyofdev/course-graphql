import { gql } from '@apollo/client';

export const GET_WILDERS = gql`
    query GetWilders {
        wilders {
            id
            name
            city
            skills {
                title
                votes
            }
        }
    }
`;
