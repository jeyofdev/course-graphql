// Resolver function for each API endpoint
const resolvers = {
    Query: {
        humans: (_, __, context) => {
            return context.datas.characters.filter(
                (character) => !character.species
            );
        },
        noHumans: (_, __, context) => {
            return context.datas.characters.filter(
                (character) => character.species
            );
        },
    },
};

export default resolvers;
