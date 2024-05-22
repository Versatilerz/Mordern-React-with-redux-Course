import { useState } from "react";

export type Options = {
  label: string;
  value: string;
};
export type DropdownProps = Options[];

const Dropdown: React.FC<{
  options: DropdownProps;
  onChange: (option: Options) => void;
  value: Options | undefined;
}> = ({ options, onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option: Options) => {
    setIsOpen(false);
    onChange(option);
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
      <div onClick={handleToggle}>{value?.label ?? "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};
export default Dropdown;
