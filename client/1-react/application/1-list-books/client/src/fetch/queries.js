import { gql } from '@apollo/client';

export const GET_BOOKS = gql(`
    query books {
        books {
            id
            name
            genre
        }
    }
`);

export const GET_BOOK = gql(`
    query book($id: ID!) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`);

export const GET_AUTHORS = gql(`
    query authors {
        authors {
            id
            name
            age
        }
    }
`);
