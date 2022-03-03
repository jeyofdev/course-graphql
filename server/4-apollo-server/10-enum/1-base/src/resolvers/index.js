// Resolver function for each API endpoint
const resolvers = {
    Query: {
        users: (_, __, context) => context.datas.users,
        usersByStatus: (_, args, context) =>
            context.datas.users.filter((user) => user.status === args.status),
    },
    Mutation: {
        add: (_, args, context) => {
            const newUser = {
                id: context.datas.users.length + 1,
                name: args.name,
                email: args.email,
                status: args.status,
            };
            context.datas.users.push(newUser);

            return newUser;
        },
    },
};

export default resolvers;
