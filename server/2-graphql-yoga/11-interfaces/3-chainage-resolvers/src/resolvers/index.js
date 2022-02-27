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
    Human: {
        wand: (parent, _, context) => {
            // return { wood: 'john', core: 'bla bla', length: 14 };
            return context.datas.wands.find(
                (wand) => wand.character_id === parent.id
            );
        },
    },
    Wand: {
        wood: (parent) => {
            // return 'wood';
            return parent.wood.toUpperCase();
        },
        core: (parent) => {
            // return 'core';
            return parent.core.toUpperCase();
        },
        length: (parent) => {
            // return 'length';
            return parent.length ? Math.round(parent.length) : 0;
        },
    },
    Query: {
        characters: (_, __, context) => {
            return context.datas.characters;
        },
    },
};

export default resolvers;
