const rootMutation = {
    addUser: (_, args, context) => {
        const newUser = {
            id: context.datas.users.length + 1,
            name: args.name,
            email: args.email,
        };

        context.datas.users.push(newUser);

        context.pubSub.publish('user', {
            user: { user: newUser, mutation: 'ADD' },
        });

        return newUser;
    },
    updateUser: (_, args, context) => {
        const index = args.id + 1;
        const user = context.datas.users.find((user) => user.id == args.id);

        for (const key in user) {
            user[key] = args[key] ?? user[key];
        }

        context.pubSub.publish('user', {
            user: { user, mutation: 'UPDATE' },
        });

        return user;
    },
    deleteUser: (_, args, context) => {
        const user = context.datas.users.splice(args.id - 1, 1)[0];

        context.pubSub.publish('user', {
            user: { user, mutation: 'DELETE' },
        });

        return user;
    },
};

export default rootMutation;
