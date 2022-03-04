import { gql } from '@apollo/client';

export const ADD_BOOKS = gql(`
    mutation AddBook($book: BookInput!) {
        addBook(book: $book) {
            id
            name
            genre
        }
    }
`);
