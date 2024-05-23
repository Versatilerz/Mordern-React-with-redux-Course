import { useState } from "react";
import Dropdown, { Options } from "../components/Dropdown";

const DropDownPage = () => {
  const [selected, setSelected] = useState<Options>();
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
  ];

  const handleSelect = (option: Options) => {
    setSelected(option);
  };

  return (
    <Dropdown options={options} value={selected} onChange={handleSelect} />
  );
};

export default DropDownPage;
