const router = require('express').Router();
const { getAll, getById } = require('../../services/productService');
const { create } = require('../../services/clienteService');
const { createCarrito } = require('../../services/carritoService');

router.post('/carrito', async (req, res, next) => {
  try {
    console.log("Se está ejecutando el POST");
    const { producto_id, cantidad } = req.body;
    await createCarrito (producto_id, cantidad);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});


router.post('/clientes', async (req, res, next) => {
  try {
    console.log("Se está ejecutando el POST");
    const { nombre, apellidos, email, telefono, direccion } = req.body;
    await create (nombre, apellidos, email, telefono, direccion);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

router.use('/clientes', (req, res, next) => {
  console.log("Solicitud recibida en /clientes");
  next();
});
router.get('/clientes', (req, res) => {
  res.render('clientes');
});

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
