// migrate.ts
import { Pool } from 'pg';
import pool from './src/config/database'; // ajuste o caminho conforme necessário

const runMigration = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        passwordHash VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        userId INTEGER REFERENCES users(id),
        bookId INTEGER REFERENCES books(id),
        orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Migração executada com sucesso!');
  } catch (err) {
    console.error('Erro ao executar a migração:', err);
  } finally {
    client.release();
  }
};

runMigration().catch(console.error);
