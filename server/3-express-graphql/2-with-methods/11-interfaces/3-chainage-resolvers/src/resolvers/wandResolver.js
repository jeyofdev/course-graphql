const findById = (id, context) => {
    return context.datas.wands.find((wand) => wand.character_id === id);
};

export default {
    findById,
};
