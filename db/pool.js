const { Pool } = require("pg");

require("dotenv").config();

const dbConfig = { connectionString: process.env.DB_HOST };

const pool = new Pool(dbConfig);

module.exports = pool;
