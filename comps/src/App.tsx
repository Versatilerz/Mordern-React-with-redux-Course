import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <div>
      <AccordionPage />
      <div className=" my-10 w-2/4 h-1 bg-gray-300"></div>
      <ButtonPage />
      <div className="my-10 w-2/4 h-1 bg-gray-300"></div>
      <DropDownPage />
    </div>
  );
};

export default App;
