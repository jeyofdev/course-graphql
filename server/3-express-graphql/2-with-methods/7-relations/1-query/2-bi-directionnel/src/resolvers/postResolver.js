const find = (context) => {
    return context.datas.posts;
};

const findByUserId = (userId, context) => {
    return context.datas.posts.filter((post) => post.userId === userId);
};

export default {
    find,
    findByUserId,
};
