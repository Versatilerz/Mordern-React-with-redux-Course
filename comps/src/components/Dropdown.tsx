import { useState } from "react";

export type Options = {
  label: string;
  value: string;
};
export type DropdownProps = Options[];

const Dropdown: React.FC<{
  options: DropdownProps;
  onSelect: (option: Options) => void;
  selection: Options;
}> = ({ options, onSelect, selection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option: Options) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  // const content = selection ? selection : "Select...";

  return (
    <div>
      <div onClick={handleToggle}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};
export default Dropdown;
