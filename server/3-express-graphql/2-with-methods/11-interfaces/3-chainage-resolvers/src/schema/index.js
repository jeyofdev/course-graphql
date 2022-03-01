import { GraphQLObjectType, GraphQLSchema, GraphQLList } from 'graphql';
import characterResolver from '../resolvers/characterResolver.js';
import CharacterInterface from '../interfaces/CharacterInterface.js';
import HumanType from '../types/HumanType.js';
import NoHumanType from '../types/NoHumanType.js';

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        characters: {
            type: new GraphQLList(CharacterInterface),
            resolve: (_, __, context, info) => {
                return characterResolver.find(context);
            },
        },
        human: {
            type: new GraphQLList(HumanType),
            resolve: (_, __, context) => {
                return characterResolver.findHuman(context);
            },
        },
        noHuman: {
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
