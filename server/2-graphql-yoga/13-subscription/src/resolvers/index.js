import rootMutation from './rootMutation.js';
import rootQuery from './rootQuery.js';
import rootSubsription from './rootSubscription.js';

// Resolver function for each API endpoint
const resolvers = {
    Query: rootQuery,
    Mutation: rootMutation,
    Subscription: rootSubsription,
};

export default resolvers;
