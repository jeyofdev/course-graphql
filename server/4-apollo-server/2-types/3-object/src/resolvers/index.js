// Resolver function for each API endpoint
const resolvers = {
    Query: {
        user: () => ({
            name: 'John Doe',
            email: 'john-doe@test.com',
            age: 35,
        }),
        person: () => ({
            profile: {
                name: 'Jane Doe',
                email: 'jane-doe@test.com',
                age: 20,
            },
            note: 5.2,
        }),
    },
};

export default resolvers;
