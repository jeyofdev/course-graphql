// Resolver function for each API endpoint
const resolvers = {
    Query: {
        users: (_, __, context) => context.datas.users,
    },
    Mutation: {
        add: (_, args, context) => {
            const newUser = {
                id: context.datas.users.length + 1,
                name: args.user.name,
                email: args.user.email,
            };
            context.datas.users.push(newUser);

            return newUser;
        },
        update: (_, args, context) => {
            const user = context.datas.users.find((user) => user.id == args.id);

            for (const key in user) {
                user[key] = args.user[key] ?? user[key];
            }

            return user;
        },
    },
};

export default resolvers;
