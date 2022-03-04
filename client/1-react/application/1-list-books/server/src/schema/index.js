import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    input AuthorInput {
        name: String
        age: Int
    }

    input BookInput {
        name: String
        genre: String
        authorId: ID
    }

    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }

    type Author {
        id: ID
        name: String
        age: Int
        books: [Book]
    }

    type Query {
        books: [Book]!
        book(id: ID!): Book!
        authors: [Author]!
        author(id: ID!): Author!
    }

    type Mutation {
        addAuthor(author: AuthorInput!): Author
        updateAuthor(id: ID!, author: AuthorInput!): Author!
        deleteAuthor(id: ID!): Author!

        addBook(book: BookInput!): Book!
        updateBook(id: ID!, book: BookInput!): Book!
        deleteBook(id: ID!, ): Book!
    }
`);

export default schema;
