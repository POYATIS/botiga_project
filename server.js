const express = require('express');
const app = express();
const { query } = require('./database.js');

app.get('/', function(res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api/producto', (res) => {
  query('SELECT * FROM producto', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    res.json(rows);
  });
});

app.use(function (err, res) {
  console.error(err.stack);
  res.status(500).send('ERROR!');
});

app.listen(8080, () => console.log('Arriba en el 8000'));
