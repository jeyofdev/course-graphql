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

export const GET_BOOK_BY_ID = gql(`
    query book($id: ID!) {
        book(id: $id) {
            id
            name
            genre
        }
    }
`);
