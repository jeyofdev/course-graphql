import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
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

export default new GraphQLSchema({
    query: rootQuery,
});
