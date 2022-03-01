const findHuman = (context) => {
    return context.datas.characters.filter((character) => !character.species);
};

const findNoHuman = (context) => {
    return context.datas.characters.filter((character) => character.species);
};

export default {
    findHuman,
    findNoHuman,
};
