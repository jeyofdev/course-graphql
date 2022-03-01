import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import UserType from '../types/UserType.js';
import PersonType from '../types/PersonType.js';
import userResolver from '../resolvers/userResolver.js';
import personResolver from '../resolvers/personResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: () => {
                return userResolver.find();
            },
        },
        person: {
            type: PersonType,
            resolve: () => {
                return personResolver.getPerson();
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
