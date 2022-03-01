import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import CharacterInterface from '../interfaces/CharacterInterface.js';
import GenderEnum from '../enum/GenderEnum.js';

const HumanType = new GraphQLObjectType({
    name: 'HumanType',
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
        dateOfBirth: {
            type: GraphQLString,
        },
        actor: {
            type: GraphQLString,
        },
    }),
});

export default HumanType;
