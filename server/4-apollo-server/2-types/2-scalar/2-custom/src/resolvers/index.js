import DateTimeScalar from '../scalars/index.js';

// Resolver function for each API endpoint
const resolvers = {
    DateTime: DateTimeScalar,
    Query: {
        id: () => 1,
        name: () => 'John Doe',
        createdAt: () => new Date(),
    },
};

export default resolvers;
