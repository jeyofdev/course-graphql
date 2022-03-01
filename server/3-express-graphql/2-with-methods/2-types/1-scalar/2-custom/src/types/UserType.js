import {
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';
import DateTimeScalar from '../scalars/DateTimeScalar.js';

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        createdAt: {
            type: DateTimeScalar,
        },
    }),
});

export default UserType;
