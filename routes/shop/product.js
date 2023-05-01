const router = require('express').Router();
const { getAll } = require('../../services/productService');

router.get('/', async (req, res, next) => {
  try {
    const response = await getAll();
    res.render('index', { products: response.products });
    console.log(response.products);

  } catch (err) { 
    next(err);
  }
});

module.exports = router;
