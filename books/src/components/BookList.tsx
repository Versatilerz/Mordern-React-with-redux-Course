import useBooksContext from "../hooks/use-books-context";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};
export default BookList;
