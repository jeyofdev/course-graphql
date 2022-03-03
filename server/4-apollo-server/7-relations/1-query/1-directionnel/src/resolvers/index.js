// Resolver function for each API endpoint
const resolvers = {
    Post: {
        user: (parent, _, context) => {
            return context.datas.users.find(
                (user) => user.id === parent.userId
            );
        },
    },
    Query: {
        users: (_, __, context) => context.datas.users,
        posts: (_, __, context) => context.datas.posts,
    },
};

export default resolvers;
