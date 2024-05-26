import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export type AccordionSection = {
  label: string;
  content: string;
  id: string;
};
export type AccordionProps = AccordionSection[];

const Accordion: React.FC<{ items: AccordionProps }> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // if you want to define the event handler outside of the scoped mapping function we can execute the handleclick and pass trough the index
  // because we CALL the handleclick we can pass a value trough, otherwise it would just be the event object
  const handleClick = (index: number) => {
    // only use this workaround if your stateupdate depends on your prevState (most often when updates to state happen REALLY fast)
    setExpandedIndex((currentExpendedIndex) => {
      if (index === currentExpendedIndex) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpended ? <FaChevronDown /> : <FaChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};
export default Accordion;
