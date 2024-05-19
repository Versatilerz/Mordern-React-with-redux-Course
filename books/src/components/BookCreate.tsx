import { ChangeEvent, FormEvent, useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const { handleCreateBook } = useBooksContext();
  const [title, setTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button">Create!</button>
      </form>
    </div>
  );
};
export default BookCreate;
