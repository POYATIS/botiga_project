const router = require('express').Router();
const { getAll } = require('../../services/productService');

router.get('/', async (req, res, next) => {
  try {
    const response = await getAll();
    res.render('product-list', { products: response });
    console.log(response);

  } catch (err) { 
    next(err);
  }
});

module.exports = router;
