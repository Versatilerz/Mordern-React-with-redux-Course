import { useState } from "react";
import Dropdown, { Options } from "./components/Dropdown";

const App = () => {
  const [selected, setSelected] = useState<Options>({ label: "", value: "" });
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];

  const handleSelect = (option: Options) => {
    setSelected(option);
  };

  return (
    <Dropdown options={options} selection={selected} onSelect={handleSelect} />
  );
};

export default App;
