const Book = {
    addBook: (_, args, context) => {
        const newBook = {
            id: context.datas.books.length + 1,
            ...args.book,
        };

        context.datas.books.push(newBook);

        return newBook;
    },
    updateBook: (_, args, context) => {
        const book = context.datas.books.find((book) => book.id == args.id);

        for (const key in book) {
            book[key] = args.book[key] ?? book[key];
        }

        return book;
    },
    deleteBook: (_, args, context) => {
        const book = context.datas.books.splice(args.id - 1, 1)[0];
        return book;
    },
};

export default Book;
