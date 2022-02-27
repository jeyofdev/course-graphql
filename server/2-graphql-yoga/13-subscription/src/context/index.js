import { PubSub } from 'graphql-yoga';
import users from '../../datas/users.json';

const context = {
    datas: {
        users,
    },
    pubSub: new PubSub(),
};

export default context;
