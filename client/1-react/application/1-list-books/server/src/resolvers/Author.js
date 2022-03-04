const Author = {
    addAuthor: (_, args, context) => {
        const newAuthor = {
            id: context.datas.authors.length + 1,
            ...args.author,
        };

        context.datas.authors.push(newAuthor);

        return newAuthor;
    },
    updateAuthor: (_, args, context) => {
        const user = context.datas.authors.find(
            (author) => author.id == args.id
        );

        for (const key in user) {
            user[key] = args.author[key] ?? user[key];
        }

        return user;
    },
    deleteAuthor: (_, args, context) => {
        const user = context.datas.authors.splice(args.id - 1, 1)[0];

        return user;
    },
};

export default Author;
