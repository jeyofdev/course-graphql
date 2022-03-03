import { gql } from 'apollo-server';

// Set schema
const schema = gql(`
    scalar Date

    type Candy {
        id: ID!
        name: String
        price: Float
    }

    type OutOfStock {
        restockDate: Date
    }

    type RegionUnavailability {
        availableRegions: [String!]
    }

    union ProductsResult = Candy | OutOfStock | RegionUnavailability

    type Query {
        candy(id: ID!): ProductsResult
    }
`);

export default schema;
