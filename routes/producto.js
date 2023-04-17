const express = require("express");
const productCtrl = require("../controlleres/product");
const api = express.Router();

api.get("/product", productCtrl.getProducts);

module.exports = api;