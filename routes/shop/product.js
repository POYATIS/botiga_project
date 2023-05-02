const router = require('express').Router();
const { getAll, getById } = require('../../services/productService');

router.get('/', async (req, res, next) => {
  try {
    const response = await getAll();
    res.render('index', { products: response.products });
    console.log(response.products);

  } catch (err) { 
    next(err);
  }
});

router.get('/producto/:id', async (req, res, next) => {

  try {
    const id = req.params.id;
    const producto = await getById(id);

    res.render('producto', { producto });
    console.log(producto);
  } catch (err) { 
    next(err);
  }
});


module.exports = router;
