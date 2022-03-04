import Query from './Query.js';
import Mutation from './Mutation.js';

// Resolver function for each API endpoint
const resolvers = {
    Book: {
        author: (parent, __, context) =>
            context.datas.authors.find(
                (author) => author.id == parent.authorId
            ),
    },
    Author: {
        books: (parent, __, context) =>
            context.datas.books.filter((books) => books.authorId == parent.id),
    },
    Query,
    Mutation,
};

export default resolvers;
