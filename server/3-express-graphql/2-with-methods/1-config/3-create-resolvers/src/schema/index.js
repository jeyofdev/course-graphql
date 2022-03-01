import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import UserType from '../types/UserType.js';
import { findUserById } from '../resolvers/userResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve: (_, args) => {
                // code to get data from database
                return findUserById(args.id);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
