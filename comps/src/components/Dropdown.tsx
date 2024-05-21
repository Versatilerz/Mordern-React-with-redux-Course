import { useState } from "react";

export type Options = {
  label: string;
  value: string;
};
export type DropdownProps = Options[];

const Dropdown: React.FC<{ options: DropdownProps }> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {};

  return <div></div>;
};
export default Dropdown;
