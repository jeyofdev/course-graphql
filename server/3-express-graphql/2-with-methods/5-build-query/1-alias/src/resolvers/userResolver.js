const findById = (id, context) => {
    return context.datas.users.find((user) => user.id === id);
};

export default {
    findById,
};
