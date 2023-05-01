const productRouter = require('./shop/product');
const express = require('express');
const router = express.Router();

router.use('/product', productRouter);

module.exports = router;
