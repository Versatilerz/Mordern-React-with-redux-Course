import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <div className="container mx auto grid grid-cols-4 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-2">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropDownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
