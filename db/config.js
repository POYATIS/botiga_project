const { Pool } = require('pg');
require('dotenv').config();

const devConfig = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const pool = new Pool({
    connectionString: devConfig
    
});

module.exports = pool;