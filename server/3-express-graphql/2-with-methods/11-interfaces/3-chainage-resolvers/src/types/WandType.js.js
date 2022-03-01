import { GraphQLFloat, GraphQLObjectType, GraphQLString } from 'graphql';
import HumanType from './HumanType.js';
import characterResolver from '../resolvers/characterResolver.js';

const WandType = new GraphQLObjectType({
    name: 'WandType',
    fields: () => ({
        wood: {
            type: GraphQLString,
        },
        core: {
            type: GraphQLString,
        },
        length: {
            type: GraphQLFloat,
        },
    }),
});

export default WandType;
