// Exemplo em BookRepository
import { supabase } from '../database'; // Altere o caminho conforme necessário
import { Book } from '../models/bookModel';

export class BookRepository {
    async getAllBooks(): Promise<Book[]> {
        const { data, error } = await supabase.from('books').select('*');
        if (error) throw new Error(error.message);
        return data as Book[];
    }

    async addBook(title: string, author: string, price: number): Promise<Book> {
        const { data, error } = await supabase
            .from('books')
            .insert([{ title, author, price }])
            .single();
        if (error) throw new Error(error.message);
        return data as Book;
    }
}
