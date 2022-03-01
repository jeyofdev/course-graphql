import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

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
        age: {
            type: GraphQLInt,
        },
        note: {
            type: GraphQLFloat,
        },
        isDeveloper: {
            type: GraphQLBoolean,
        },
    }),
});

export default UserType;
