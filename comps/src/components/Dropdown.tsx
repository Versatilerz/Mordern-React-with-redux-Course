import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleToggle}
      >
        {value?.label ?? "Select..."}
        {!isOpen && <GoChevronDown className="text-lg" />}
        {isOpen && <GoChevronUp className="text-lg" />}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};
export default Dropdown;
