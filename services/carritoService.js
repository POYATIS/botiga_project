const Carrito = require('../models/carritoModels');

module.exports.createCarrito = async (producto_id,cantidad) => {
  try {
    const newCarrito = await Carrito.createCarrito({
      producto_id,
      cantidad
    });

    return newCarrito;

  } catch (err) {
    throw new Error(err);
  }
};

