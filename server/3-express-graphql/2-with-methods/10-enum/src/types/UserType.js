import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import StatusEnum from '../enum/StatusEnum.js';

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
        status: {
            type: StatusEnum,
        },
    }),
});

export default UserType;
