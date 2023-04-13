const { Pool } = require('pg');

const pool = new Pool({
  user: 'sandra-poyatos_free',
  host: 'postgresql-sandra-poyatos.alwaysdata.net',
  database: 'sandra-poyatos_2023',
  password: 'Primavera2020',
  port: 5432,
});

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connect', err);
  } else {
    console.log('Conectado database');

    client.query('SELECT * FROM producto', (err, result) => {
      done(); 
      if (err) {
        console.error('Error', err);
      } else {
        console.log(result.rows);
      }
    });
  }
});
