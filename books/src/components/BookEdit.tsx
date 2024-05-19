import { ChangeEvent, FormEvent, useState } from "react";
import { Book } from "../context/books";
import useBooksContext from "../hooks/use-books-context";

type BookEditProps = {
  book: Book;
  onSubmit: () => void;
};

const BookEdit: React.FC<BookEditProps> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { handleEditBookById } = useBooksContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit();
    handleEditBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary">Save</button>
    </form>
  );
};
export default BookEdit;
