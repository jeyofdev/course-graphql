// Resolve queries

const Query = {
    books: (_, __, context) => context.datas.books,
    authors: (_, __, context) => context.datas.authors,
    book: (_, args, context) =>
        context.datas.books.find((book) => book.id === args.id),
    author: (_, args, context) =>
        context.datas.authors.find((author) => author.id === args.id),
};

export default Query;
