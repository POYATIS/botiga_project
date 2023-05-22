const { Pool } = require("pg");
require("dotenv").config();

const PGHOST = process.env.PGHOST || "postgresql-sandra-poyatos.alwaysdata.net";
const PGUSER = process.env.PGUSER || "sandra-poyatos_free";
const PGPASSWORD = process.env.PGPASSWORD || "Primavera2020";
const PGDATABASE = process.env.PGDATABASE || "sandra-poyatos_2023";
const PGPORT = process.env.PGPORT || 5432;

const devConfig = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

const pool = new Pool({
  connectionString: devConfig,
});

module.exports = pool;