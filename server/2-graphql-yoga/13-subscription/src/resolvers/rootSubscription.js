const rootSubsription = {
    user: {
        subscribe(_, __, context) {
            return context.pubSub.asyncIterator('user');
        },
    },
};

export default rootSubsription;
