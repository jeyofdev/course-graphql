import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql';

const PersonType = new GraphQLObjectType({
    name: 'PersonType',
    fields: () => ({
        name: {
            type: GraphQLString,
        },
        age: {
            type: GraphQLInt,
        },
        skills: {
            type: new GraphQLList(GraphQLString),
        },
    }),
});

export default PersonType;
