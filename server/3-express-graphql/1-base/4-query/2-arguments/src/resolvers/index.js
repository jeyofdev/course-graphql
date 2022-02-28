// Resolver function for each API endpoint
const resolvers = {
    users: (_, context) => context.datas.users,
    user: (args, context) =>
        context.datas.users.find((user) => user.id === args.id),
};

export default resolvers;
