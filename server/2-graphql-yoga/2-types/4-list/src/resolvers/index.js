import usersDatas from '../../datas/users.json';

// Resolver function for each API endpoint
const resolvers = {
    Query: {
        person: () => ({
            name: 'John Doe',
            age: 35,
            skills: ['react', 'angular', 'vuejs'],
        }),
        users: () => usersDatas,
    },
};

export default resolvers;
