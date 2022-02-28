// Resolver function for each API endpoint
const resolvers = {
    users: (_, context) => context.datas.users,
    usersByStatus: (args, context) =>
        context.datas.users.filter((user) => user.status === args.status),
    add: (args, context) => {
        const newUser = {
            id: context.datas.users.length + 1,
            name: args.name,
            email: args.email,
            status: args.status,
        };
        context.datas.users.push(newUser);

        return newUser;
    },
};

export default resolvers;
