// Resolver function for each API endpoint
const resolvers = {
    Query: {
        user: (_, args, context) =>
            context.datas.users.find((user) => user.id === args.id),
    },
};

export default resolvers;
