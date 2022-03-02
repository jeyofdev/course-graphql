// Resolver function for each API endpoint
const resolvers = {
    Query: {
        name: () => {
            return 'John Doe';
        },
        email: () => {
            return 'john-doe@test.com';
        },
    },
};

export default resolvers;
