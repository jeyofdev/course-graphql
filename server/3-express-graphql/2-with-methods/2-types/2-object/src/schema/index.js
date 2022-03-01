import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import UserType from '../types/UserType.js';
import DeveloperType from '../types/DeveloperType.js';
import { getUser } from '../resolvers/userResolver.js';
import { getPerson } from '../resolvers/developerResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            resolve: () => {
                return getUser();
            },
        },
        person: {
            type: DeveloperType,
            resolve: () => {
                return getPerson();
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
