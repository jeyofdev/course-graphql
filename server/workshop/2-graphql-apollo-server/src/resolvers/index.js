const resolvers = {
    Query: {
        books: (_, __, context) => context.books,
        getBookById: (_, args, context) =>
            context.books.find((book) => book.id == args.bookId),
    },
    Mutation: {
        addBook: (_, args, context) => {
            const lastId = context.books.at(-1).id;
            const newId = lastId + 1;

            context.books.push({
                title: args.title,
                author: args.author,
                id: newId,
            });

            return context.books.at(-1);
        },
    },
};

export default resolvers;
