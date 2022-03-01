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
    resolveType: (data) => {
        if (data.species) {
            return 'NoHumanType'; // type NoHuman
        }

        if (!data.species) {
            return 'HumanType'; // type Human
        }

        return null;
    },
});

export default CharacterInterface;
