const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config.db);

pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connect', err);
  } else {
    console.log('Conectado database');
    
  }
});
