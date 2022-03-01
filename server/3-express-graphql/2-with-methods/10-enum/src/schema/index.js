import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLString,
} from 'graphql';
import UserType from '../types/UserType.js';
import userResolver from '../resolvers/userResolver.js';
import StatusEnum from '../enum/StatusEnum.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: (_, __, context) => {
                return userResolver.find(context);
            },
        },
        usersByStatus: {
            type: new GraphQLList(UserType),
            args: { status: { type: StatusEnum } },
            resolve: (_, args, context) => {
                return userResolver.findByStatus(args.status, context);
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
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                status: { type: StatusEnum },
            },
            resolve: (_, args, context) => {
                return userResolver.add(args, context);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation,
});
