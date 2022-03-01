import {
    GraphQLID,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import postResolver from '../resolvers/postResolver.js';
import PostType from './PostType.js';

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve: (parent, _, context) => {
                return postResolver.findByUserId(parent.id, context);
            },
        },
    }),
});

export default UserType;
