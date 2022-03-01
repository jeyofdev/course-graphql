const find = (context) => {
    return context.datas.posts;
};

const findByUserId = (userId, context) => {
    return context.datas.posts.filter((post) => post.userId == userId);
};

const add = (args, context) => {
    const newPost = {
        id: context.datas.posts.length + 1,
        title: args.title,
        content: args.content,
        userId: args.userId,
    };

    context.datas.posts.push(newPost);

    return newPost;
};

export default {
    find,
    findByUserId,
    add,
};
