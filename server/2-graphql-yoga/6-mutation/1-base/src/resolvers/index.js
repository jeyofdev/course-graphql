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
    },
};

export default resolvers;
