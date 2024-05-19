import { createContext, useCallback, useState } from "react";
import axios from "axios";

export type Book = {
  id: number;
  title: string;
};

type Context = {
  books: Book[];
  handleDeleteBookById: (id: number) => Promise<void>;
  handleEditBookById: (id: number, newTitle: string) => Promise<void>;
  handleCreateBook: (title: string) => Promise<void>;
  fetchBooks: () => Promise<void>;
};

const initialState: Book[] = [];

const BooksContext = createContext<Context>({
  books: [],
  handleDeleteBookById: async () => {},
  handleEditBookById: async () => {},
  handleCreateBook: async () => {},
  fetchBooks: async () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState(initialState);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }, []);

  const handleCreateBook = async (title: string) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const handleDeleteBookById = async (id: number) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      // if return is false it does not return, true does return
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleEditBookById = async (id: number, newTitle: string) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    handleDeleteBookById,
    handleEditBookById,
    handleCreateBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
