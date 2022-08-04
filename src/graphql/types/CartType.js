import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLScalarType,
} from "graphql";

import ProductType from "./ProductType.js";

// const CartType = new GraphQLObjectType({
//   name: "Cart",
//   description: "Cart object Type",
//   fields: () => ({
//     _id: {
//       type: GraphQLID,
//     },
//     id: {
//       type: GraphQLID,
//     },
//     name: {
//       type: GraphQLString,
//     },
//     Date: {
//       type: GraphQLString,
//     },
//     products: {
//       type: ProductType,
//     },
//   }),
// });

const CartType = new GraphQLObjectType({
  name: "Cart",
  description: "Cart object Type",
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
    Date: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLString,
    },
    products: {
      type: new GraphQLNonNull(new GraphQLList(ProductType)),
    },
  }),
});

export default CartType;
