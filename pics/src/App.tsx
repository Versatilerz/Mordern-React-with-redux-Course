import { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [image, setImages] = useState([]);
  const handleSubmit = async (term: string) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={image} />
    </>
  );
};

export default App;
