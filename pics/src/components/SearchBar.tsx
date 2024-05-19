import { useState } from "react";
import "./Searchbar.css";

const SearchBar: React.FC<{ onSubmit: (term: string) => void }> = ({
  onSubmit,
}) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};
export default SearchBar;
