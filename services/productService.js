const httpError = require('http-errors');

const Product = require('../models/productModels');

module.exports.getAll = async () => {
    try {
        const products = await Product.getAll();

        if(!products) {
            throw httpError(404, 'No products.');
        }

        return { products };
        
    } catch(err) {
        throw err;
    }
} 