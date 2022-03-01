const find = (context) => {
    return context.datas.users;
};

const findById = (id, context) => {
    return context.datas.users.find((user) => user.id === id);
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
    findById,
    add,
};
