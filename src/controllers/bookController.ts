// src/controllers/bookController.ts
import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response): Promise<Response> => {
  const books = await bookRepository.getAllBooks();
  return res.status(200).json(books);
};

export const addBook = async (req: Request, res: Response): Promise<Response> => {
  const { title, author, price } = req.body;

  // Aqui você pode adicionar validações, se necessário
  const book = await bookRepository.addBook(title, author, price);
  return res.status(201).json(book);
};
