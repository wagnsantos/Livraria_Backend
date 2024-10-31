// src/routes/bookRoutes.ts
import { Router } from 'express';
import { getAllBooks, addBook } from '../controllers/bookController';


const router = Router();

router.get('/books', getAllBooks); // GET para listar livros
router.post('/books', addBook);     // POST para adicionar um livro

export default router;