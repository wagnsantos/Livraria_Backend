// src/server.ts
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Usar rotas de livros
app.use('/api', bookRoutes);

// Rota padrão com tipos explícitos
app.get('/', (req: Request, res: Response) => {
    res.send('Bem-vindo à API da Livraria!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
