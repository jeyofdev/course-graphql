import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import UserType from './UserType.js';
import userResolver from '../resolvers/userResolver.js';

const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        content: {
            type: GraphQLString,
        },
        user: {
            type: UserType,
            resolve: (parent, _, context) => {
                return userResolver.findById(parent.userId, context);
            },
        },
    }),
});

export default PostType;
