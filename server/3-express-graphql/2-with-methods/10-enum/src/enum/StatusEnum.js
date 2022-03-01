import { GraphQLEnumType } from 'graphql';

const StatusEnum = new GraphQLEnumType({
    name: 'STATUS',
    values: {
        USER: {
            value: 'USER',
        },
        ADMIN: {
            value: 'ADMIN',
        },
        SUPER_ADMIN: {
            value: 'SUPER_ADMIN',
        },
    },
});

export default StatusEnum;
