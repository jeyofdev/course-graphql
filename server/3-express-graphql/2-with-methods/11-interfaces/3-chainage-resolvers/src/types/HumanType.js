import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';
import CharacterInterface from '../interfaces/CharacterInterface.js';
import GenderEnum from '../enum/GenderEnum.js';
import WandType from './WandType.js.js';
import wandResolver from '../resolvers/wandResolver.js';

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
        wand: {
            type: WandType,
            resolve: (parent, _, context) => {
                return wandResolver.findById(parent.id, context);
            },
        },
    }),
});

export default HumanType;
