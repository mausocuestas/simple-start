// criar arquivo de conexão com o banco de dados hospedado na Neon
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use variáveis de ambiente para a URL do banco
  // Configurações adicionais, se necessário
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};