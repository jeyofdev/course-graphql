// Resolver function for each API endpoint
const resolvers = {
    users: (_, context) => context.datas.users,
    user: (args, context) =>
        context.datas.users.find((user) => user.id === args.id),
    add: (args, context) => {
        const newUser = {
            id: context.datas.users.length + 1,
            name: args.name,
            email: args.email,
        };
        context.datas.users.push(newUser);

        return newUser;
    },
};

export default resolvers;
