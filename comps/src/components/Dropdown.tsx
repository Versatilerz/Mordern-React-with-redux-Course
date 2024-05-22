import { useState } from "react";

export type Options = {
  label: string;
  value: string;
};
export type DropdownProps = Options[];

const Dropdown: React.FC<{ options: DropdownProps }> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleToggle}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};
export default Dropdown;
