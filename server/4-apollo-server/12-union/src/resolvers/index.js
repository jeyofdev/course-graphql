// Resolver function for each API endpoint
const resolvers = {
    ProductsResult: {
        __resolveType(data) {
            if (data.restockDate) {
                return 'OutOfStock';
            }

            if (data.availableRegions) {
                return 'RegionUnavailability';
            }

            if (data.price) {
                return 'Candy';
            }

            return null;
        },
    },
    Query: {
        candy: (_, args, context) => {
            return context.datas.products.find(
                (product) => product.id === args.id
            );
        },
    },
};

export default resolvers;
