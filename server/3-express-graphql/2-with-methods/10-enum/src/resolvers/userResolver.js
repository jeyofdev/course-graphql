const find = (context) => {
    return context.datas.users;
};

const findByStatus = (status, context) => {
    return context.datas.users.filter((user) => user.status === status);
};

const add = (args, context) => {
    const newUser = {
        id: context.datas.users.length + 1,
        name: args.name,
        email: args.email,
        status: args.status,
    };
    context.datas.users.push(newUser);

    return newUser;
};

export default {
    find,
    findByStatus,
    add,
};
