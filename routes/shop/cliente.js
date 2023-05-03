const router = require('express').Router();
const { create } = require('../../services/clienteService');


router.post('/clientes', async (req, res, next) => {
  try {
    console.log("Se está ejecutando el POST");
    const { nombre, apellidos, email, telefono, direccion } = req.body;
    await create (nombre, apellidos, email, telefono, direccion);
    res.redirect('index');
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


module.exports = router;
