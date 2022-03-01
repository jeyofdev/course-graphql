import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserType from '../types/UserType.js';
import { getUser } from '../resolvers/userResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            resolve: () => {
                return getUser();
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
