const find = (context) => {
    return context.datas.users;
};

const add = (args, context) => {
    const newUser = {
        id: context.datas.users.length + 1,
        name: args.name,
        email: args.email,
    };
    context.datas.users.push(newUser);

    return newUser;
};

export default {
    find,
    add,
};
