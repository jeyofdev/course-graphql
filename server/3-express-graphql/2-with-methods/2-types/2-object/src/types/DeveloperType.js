import { GraphQLObjectType, GraphQLFloat } from 'graphql';
import UserType from './UserType.js';

const DeveloperType = new GraphQLObjectType({
    name: 'DeveloperType',
    fields: () => ({
        profile: {
            type: UserType,
        },
        note: {
            type: GraphQLFloat,
        },
    }),
});

export default DeveloperType;
