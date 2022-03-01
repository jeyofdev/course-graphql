import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

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
        pet: {
            type: GraphQLString,
        },
        petName: {
            type: GraphQLString,
        },
    }),
});

export default UserType;
