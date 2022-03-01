const find = (context) => {
    return context.datas.users;
};

const add = (args, context) => {
    const newUser = {
        id: context.datas.users.length + 1,
        name: args.user.name,
        email: args.user.email,
    };
    context.datas.users.push(newUser);

    return newUser;
};

const update = (args, context) => {
    const user = context.datas.users.find((user) => user.id == args.id);

    for (const key in user) {
        user[key] = args.user[key] ?? user[key];
    }

    return user;
};

export default {
    find,
    add,
    update,
};
