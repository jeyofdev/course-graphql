// Resolver function for each API endpoint
const resolvers = {
    Post: {
        user: (parent, _, context) => {
            return context.datas.users.find((user) => user.id == parent.userId);
        },
    },
    User: {
        posts: (parent, _, context) => {
            return context.datas.posts.filter(
                (post) => post.userId == parent.id
            );
        },
    },
    Query: {
        users: (_, __, context) => context.datas.users,
        posts: (_, __, context) => context.datas.posts,
    },
    Mutation: {
        addUser: (_, args, context) => {
            const newUser = {
                id: context.datas.users.length + 1,
                name: args.name,
                email: args.email,
            };
            context.datas.users.push(newUser);

            return newUser;
        },
        addPost: (_, args, context) => {
            const newPost = {
                id: context.datas.posts.length + 1,
                title: args.title,
                content: args.content,
                userId: args.userId,
            };
            context.datas.posts.push(newPost);

            return newPost;
        },
    },
};

export default resolvers;
