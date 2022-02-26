// Resolver function for each API endpoint
const resolvers = {
    name: () => {
        return 'John Doe';
    },
    email: () => {
        return 'john-doe@test.com';
    },
};

export default resolvers;
