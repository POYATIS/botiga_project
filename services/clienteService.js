const httpError = require('http-errors');

const Cliente = require('../models/clienteModels');

module.exports.create = async (nombre, apellidos, email, telefono, direccion) => {
  try {
    const newCliente = await Cliente.create({
      nombre,
      apellidos,
      email,
      telefono,
      direccion,
    });

    return newCliente;

  } catch (err) {
    throw new Error(err);
  }
};

