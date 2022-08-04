import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import CartType from "../types/CartType.js";
import cartDao from "../../daos/cartDao.js";
import ProductType from "../types/ProductType.js";

const getAllCarts = {
  type: new GraphQLList(CartType),
  description: "Get all carts",
  resolve: async () => {
    const carts = await cartDao.getAllCarts();
    return carts;
  },
};

const getCartById = {
  type: CartType,
  description: "Get cart by id",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Cart id",
    },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.getCartById(args.id);
    return cart;
  },
};

const getCartProducts = {
  type: new GraphQLList(ProductType),
  description: "Get products of cart",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Cart id",
    },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.getCartById(args.id);
    const products = await Promise.all(
      cart.products.map(async (product) => {
        return await product;
      })
    );
    return products;
  },
};

const createCart = {
  type: CartType,
  description: "Create a new cart",
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    // products: {
    //   type: ProductType,
    // },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.createCart(args);
    return cart;
  },
};

const addProductToCart = {
  type: CartType,
  description: "Add product to cart",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Cart id",
    },
    productId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Product id",
    },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.addProductToCart(args.id, args.productId);
    return cart;
  },
};

const removeProductFromCart = {
  type: CartType,
  description: "Remove product from cart",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Cart id",
    },
    productId: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Product id",
    },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.removeProductFromCart(args.id, args.productId);
    return cart;
  }
}

const deleteCart = {
  type: CartType,
  description: "Delete cart",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Cart id",
    },
  },
  resolve: async (root, args) => {
    const cart = await cartDao.deleteCart(args.id);
    return cart;
  }
}


const cartControllerGraphQL = {
  queries: {
    getAllCarts,
    getCartById,
    getCartProducts,
  },
  mutations: {
    createCart,
    addProductToCart,
    removeProductFromCart,
    deleteCart,
  },
};

export default cartControllerGraphQL;
