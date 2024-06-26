import { useState } from "react";
import { Book } from "../context/books";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

type BookShowProps = {
  book: Book;
};

const BookShow: React.FC<BookShowProps> = ({ book }) => {
  const { handleDeleteBookById } = useBooksContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    handleDeleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default BookShow;
