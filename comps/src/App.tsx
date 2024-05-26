import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <Link to="/button">Go to button</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
