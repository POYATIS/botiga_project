const httpError = require('http-errors');

const Product = require('../models/productModels');

module.exports.getAll = async () => {
    try {
        const products = await Product.getAll();

        if(!products) {
            throw httpError(404, 'No hay productos.');
        }

        return { products };
        
    } catch(err) {
        throw err;
    }
} 

module.exports.getById = async (id) => {
    try {
      const product = await Product.findByPk(id);
  
      if (!product) {
        throw httpError(404, 'Producto no encontrado.');
      }
  
      return product;
  
    } catch (err) {
      throw err;
    }
  }

