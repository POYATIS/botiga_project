const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  nombre: String,
  precio: { type: Number, default: 0 },
  num_existencias: { type: Number, default: 100},
  descripcion: String,
  informacion: String,

});

module.exports = mongoose.model("Product", ProductSchema);