import { gql } from 'apollo-server';

const schemas = gql`
    type Book {
        id: ID
        title: String
        author: String
    }

    type Query {
        books: [Book]
        getBookById(bookId: ID): Book
    }

    type Mutation {
        addBook(title: String, author: String): Book
    }
`;

export default schemas;
