// src/migrations/createOrders.ts
import pool from '../config/database';

const createOrdersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      userId INTEGER REFERENCES users(id) ON DELETE CASCADE,
      bookId INTEGER REFERENCES books(id) ON DELETE CASCADE,
      quantity INTEGER NOT NULL,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  await pool.query(query);
  console.log('Tabela orders criada com sucesso.');
};

createOrdersTable().catch(console.error).finally(() => pool.end());
