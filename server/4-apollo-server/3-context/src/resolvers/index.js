// Resolver function for each API endpoint
const resolvers = {
    Query: {
        users: (_, __, context) => context.datas.users,
    },
};

export default resolvers;
