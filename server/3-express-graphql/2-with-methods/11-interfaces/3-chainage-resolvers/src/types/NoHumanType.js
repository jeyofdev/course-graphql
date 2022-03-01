import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import CharacterInterface from '../interfaces/CharacterInterface.js';
import GenderEnum from '../enum/GenderEnum.js';

const NoHumanType = new GraphQLObjectType({
    name: 'NoHumanType',
    interfaces: () => [CharacterInterface],
    fields: () => ({
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        gender: {
            type: GenderEnum,
        },
        species: {
            type: GraphQLString,
        },
    }),
});

export default NoHumanType;
