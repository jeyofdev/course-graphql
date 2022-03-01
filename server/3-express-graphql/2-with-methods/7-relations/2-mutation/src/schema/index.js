import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import UserType from '../types/UserType.js';
import PostType from '../types/PostType.js';
import userResolver from '../resolvers/userResolver.js';
import postResolver from '../resolvers/postResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: (_, __, context) => {
                return userResolver.find(context);
            },
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: (_, __, context) => {
                return postResolver.find(context);
            },
        },
    },
});

const rootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            resolve: (_, args, context) => {
                return userResolver.add(args, context);
            },
        },
        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLString },
                content: { type: GraphQLString },
                userId: { type: GraphQLID },
            },
            resolve: (_, args, context) => {
                return postResolver.add(args, context);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation,
});
