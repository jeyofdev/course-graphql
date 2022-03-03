// Resolver function for each API endpoint
const resolvers = {
    Character: {
        __resolveType: (data) => {
            if (data.species) {
                return 'NoHuman'; // type NoHuman
            } else {
                return 'Human'; // type Human
            }
        },
    },
    Query: {
        characters: (_, __, context) => {
            return context.datas.characters;
        },
    },
};

export default resolvers;
