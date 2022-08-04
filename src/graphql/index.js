import { GraphQLObjectType, GraphQLSchema } from "graphql";
import productControllerGraphQL from "./controllers/productsController.js";
import cartControllerGraphQL from "./controllers/cartsController.js";

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...productControllerGraphQL.queries,
    ...cartControllerGraphQL.queries,
  },
});


const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...productControllerGraphQL.mutations,
    ...cartControllerGraphQL.mutations,
  },
});


const schemaGraphQL = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

export default schemaGraphQL;
