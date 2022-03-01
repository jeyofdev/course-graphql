import { GraphQLObjectType, GraphQLSchema, GraphQLID } from 'graphql';
import UserType from '../types/UserType.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
