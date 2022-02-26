// Resolver function for each API endpoint
const resolvers = {
    Query: {
        id: () => 1,
        name: () => 'John Doe',
        email: () => 'john-doe@test.com',
        age: () => 35,
        note: () => 5.2,
        isDevelopper: () => true,
    },
};

export default resolvers;
