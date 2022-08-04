import {
    GraphQLID,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

const ProductType = new GraphQLObjectType({
    name: "Products",
    description: "Product object Type",
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString,
        },
        price: {
            type: GraphQLInt,
        },
        stock: {
            type: GraphQLInt,
        },
        description: {
            type: GraphQLString,
        },
        image: {
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
        code: {
            type: GraphQLString,
        },
        createdAt: {
            type: GraphQLString,
        },
        updatedAt: {
            type: GraphQLString,
        },
    }),
});

export default ProductType;
