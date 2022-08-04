import {
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import ProductType from "../types/ProductType.js";
import productDao from "../../daos/productDao.js";

const getAllProducts = {
  type: new GraphQLList(ProductType),
  description: "Get all products",
  resolve: async () => {
    const products = await productDao.getAllProducts();
    return products;
  },
};

const getProductById = {
  type: ProductType,
  description: "Get product by id",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Product id",
    },
  },
  resolve: async (root, args) => {
    const product = await productDao.getProductById(args.id);
    return product;
  },
};

const createProduct = {
  type: ProductType,
  description: "Create a new product",
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    stock: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, args) => {
    const product = await productDao.createProduct(args);
    return product;
  },
};

const updateProduct = {
  type: ProductType,
  description: "Update a product",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Product id",
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    stock: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, args) => {
    const product = await productDao.updateProduct(args.id, args);
    const productUpdated = await productDao.getProductById(args.id);
    return productUpdated;
  },
};

const deleteProduct = {
    type: ProductType,
    description: "Delete a product",
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
            description: "Product id",
        },
    },
    resolve: async (root, args) => {
        const product = await productDao.deleteProduct(args.id);
        const productDeleted = await productDao.getProductById(args.id);
        return product;
    }
}


const productControllerGraphQL = {
  mutations: {
    createProduct,
    updateProduct,
    deleteProduct,
  },
  queries: {
    getAllProducts,
    getProductById,
  },
};

export default productControllerGraphQL;
