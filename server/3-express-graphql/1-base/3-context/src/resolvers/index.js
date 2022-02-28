// Resolver function for each API endpoint
const resolvers = {
    users: (_, context) => context.datas.users,
};

export default resolvers;
