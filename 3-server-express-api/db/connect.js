/**
 * Configurações de conexão com o banco de dados.
 * Os dados de conexão com o Banco de Dados (PostgreSQL) estão no arquivo .env
 */

const { Pool } = require('pg');
require('dotenv').config(); // carregar variáveis de ambiente (dotenv)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;