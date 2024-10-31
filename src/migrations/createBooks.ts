// src/migrations/createBooks.ts
import pool from '../config/database';

const createBooksTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      author VARCHAR(100) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await pool.query(query);
  console.log('Tabela books criada com sucesso.');
};

createBooksTable().catch(console.error).finally(() => pool.end());
