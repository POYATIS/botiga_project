const express = require('express');
const app = express();
const db = require('./database.js');

console.log(db);

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});


app.get('/api/producto', (req, res) => {
  db.query('SELECT * FROM producto', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    res.json(rows);
  });
});


console.log(db.query);


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('ERROR!');
});

app.listen(3000, () => console.log('en el 3000'));
