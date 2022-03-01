import { GraphQLID, GraphQLInterfaceType, GraphQLString } from 'graphql';
import GenderEnum from '../enum/GenderEnum.js';

const CharacterInterface = new GraphQLInterfaceType({
    name: 'CharacterInterface',
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
    }),
});

export default CharacterInterface;
