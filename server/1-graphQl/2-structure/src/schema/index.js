import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    name: String
    email: String
  }
`);

export default schema;
