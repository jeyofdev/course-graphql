import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';
import UserType from '../types/UserType.js';
import UserInput from '../inputs/UserInput.js';
import userResolver from '../resolvers/userResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: (_, __, context) => {
                return userResolver.find(context);
            },
        },
    },
});

const rootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        add: {
            type: UserType,
            args: {
                user: { type: new GraphQLNonNull(UserInput) },
            },
            resolve: (_, args, context) => {
                return userResolver.add(args, context);
            },
        },
        update: {
            type: UserType,
            args: {
                id: { type: GraphQLID },
                user: { type: UserInput },
            },
            resolve: (_, args, context) => {
                return userResolver.update(args, context);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation,
});
