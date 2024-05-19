import AnimalShow from "./AnimalShow";
import "./App.css";
import { useState } from "react";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const App = () => {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
