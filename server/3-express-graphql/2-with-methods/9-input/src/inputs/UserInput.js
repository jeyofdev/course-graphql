import { GraphQLInputObjectType, GraphQLString } from 'graphql';

const UserInput = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    }),
});

export default UserInput;
