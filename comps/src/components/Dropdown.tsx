export type Options = {
  label: string;
  value: string;
};
export type DropdownProps = Options[];

const Dropdown: React.FC<{ options: DropdownProps }> = ({ options }) => {
  return <div></div>;
};
export default Dropdown;
