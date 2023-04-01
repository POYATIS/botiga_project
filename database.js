const { Pool } = require('pg');

const pool = new Pool({
  user: 'sandra-poyatos_free',
  host: 'postgresql-sandra-poyatos.alwaysdata.net',
  database: 'sandra-poyatos_2023',
  password: 'Primavera2020',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
