import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import UserType from '../types/UserType.js';
import userResolver from '../resolvers/userResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve: (_, args, context) => {
                return userResolver.findById(args.id, context);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
