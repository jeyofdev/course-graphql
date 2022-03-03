// Resolver function for each API endpoint
const resolvers = {
    Query: {
        users: (_, __, context) => context.datas.users,
    },
    Mutation: {
        add: (_, args, context) => {
            const newUser = {
                id: context.datas.users.length + 1,
                name: args.name,
                email: args.email,
            };
            context.datas.users.push(newUser);

            return newUser;
        },
        update: (_, args, context) => {
            const user = context.datas.users.find((user) => user.id == args.id);

            for (const key in user) {
                user[key] = args[key] ?? user[key];
            }

            return user;
        },
        remove: (_, args, context) => {
            const user = context.datas.users.splice(args.id - 1, 1)[0];
            return user;
        },
    },
};

export default resolvers;
