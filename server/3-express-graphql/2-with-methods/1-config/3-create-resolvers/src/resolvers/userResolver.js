import usersDatas from '../../datas/users.json';

export const findUserById = (id) => {
    return usersDatas.find((user) => user.id === id);
};
