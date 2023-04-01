const express = require('express');
const app = express();
const { query } = require('./database.js');

app.get('/api/producto', (req, res) => {
  query('SELECT * FROM producto', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, () => console.log('Arriba en el 3000'));
