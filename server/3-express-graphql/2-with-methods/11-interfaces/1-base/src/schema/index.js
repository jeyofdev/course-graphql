import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import HumanType from '../types/HumanType.js';
import NoHumanType from '../types/NoHumanType.js';
import characterResolver from '../resolvers/characterResolver.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        humans: {
            type: new GraphQLList(HumanType),
            resolve: (_, __, context) => {
                return characterResolver.findHuman(context);
            },
        },
        noHumans: {
            type: new GraphQLList(NoHumanType),
            resolve: (_, __, context) => {
                return characterResolver.findNoHuman(context);
            },
        },
    },
});

export default new GraphQLSchema({
    query: rootQuery,
});
