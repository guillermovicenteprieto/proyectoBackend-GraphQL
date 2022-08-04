import logger from "../utils/loggers.js";
import productDao from "../daos/productDao.js";
let instance = null;
class productService {
  constructor() {
    this.listProducts = [];
  }
  static getInstance() {
    if (!instance) {
      instance = new productService();
    }
    return instance;
  }

  async getAllProducts() {
    try {
      logger.info(`Se registra petición GET /api/productos`);
      const products = await productDao.getAllProducts();
      logger.info(`Se obtienen productos`);
      return products;
    } catch (err) {
      logger.error(`Error al obtener productos`);
      throw err;
    }
  }

  async getProductById(id) {
    try {
      logger.info(`Se registra petición GET /api/productos/${id}`);
      const producto = await productDao.getProductById(id);
      logger.info(`Se obtiene producto`);
      return producto;
    } catch (err) {
      logger.error(`Error al obtener producto`);
      throw err;
    }
  }

  async createProduct(product) {
    try {
      logger.info(`Se registra petición POST /api/productos`);
      const productoCreado = await productDao.createProduct(product);
      logger.info(`Se crea producto`);
      return productoCreado;
    } catch (err) {
      logger.error(`Error al crear producto`);
      throw err;
    }
  }

  async updateProduct(id, product) {
    try {
      logger.info(`Se registra petición PUT /api/productos/${id}`);
      const productoActualizado = await productDao.update(id, product);
      logger.info(`Se actualiza producto`);
      return productoActualizado;
    } catch (err) {
      logger.error(`Error al actualizar producto`);
      throw err;
    }
  }

  async deleteProduct(id) {
    try {
      logger.info(`Se registra petición DELETE /api/productos/${id}`);
      const productoEliminado = await productDao.delete(id);
      logger.info(`Se elimina producto`);
      return productoEliminado;
    } catch (err) {
      logger.error(`Error al eliminar producto`);
      throw err;
    }
  }
}

export default new productService();
