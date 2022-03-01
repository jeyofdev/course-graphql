import { GraphQLEnumType } from 'graphql';

const StatusEnum = new GraphQLEnumType({
    name: 'GENDER',
    values: {
        male: {
            value: 'male',
        },
        female: {
            value: 'female',
        },
    },
});

export default StatusEnum;
