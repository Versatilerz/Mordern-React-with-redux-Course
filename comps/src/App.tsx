import Accordion, { AccordionSection } from "./components/Accordion";

const App = () => {
  const items: AccordionSection[] = [
    {
      id: "2lkya",
      label: "Can i use react on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      id: "aga225",
      label: "Can i use Javascript on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      id: "2lky51251a",
      label: "Can i use CSS on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want.",
    },
  ];

  return <Accordion items={items} />;
};

export default App;