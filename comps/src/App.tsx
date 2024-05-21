import { useState } from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selected, setSelected] = useState(null);
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];

  const handleSelect = () => {};

  return <Dropdown options={options} />;
};

export default App;
