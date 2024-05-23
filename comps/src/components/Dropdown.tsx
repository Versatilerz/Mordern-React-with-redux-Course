import { useEffect, useState } from "react";
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

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      console.log(event.target);
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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

// javascript way of looking for clicks outside the dropdown, does not work because it looks at the FIRST div with that className.. not at the first it has.
// const dropdown = document.querySelector(".w-48");
// const handleClick = (event: MouseEvent) => {
//   console.log(event.target);
//   const target = event.target as Node | null;

//   if (dropdown?.contains(target)) {
//     console.log("Inside dropdown");
//   } else {
//     console.log("Outside dropdown");
//   }
// };

// document.addEventListener("click", handleClick, true);
