import { useState } from "react";

export type AccordionSection = {
  label: string;
  content: string;
  id: string;
};
export type AccordionProps = AccordionSection[];

const Accordion: React.FC<{ items: AccordionProps }> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    if (index === expandedIndex) {
      console.log("expanded");
    } else {
      console.log("collapsed");
    }

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};
export default Accordion;
