import Button from "./components/Button";
import { GoChevronRight } from "react-icons/go";
import { GoHubot } from "react-icons/go";
import { GoGitMerge } from "react-icons/go";

const App = () => {
  const clickHandler = () => {
    console.log("clicked!");
  };

  return (
    <div>
      <div>
        <Button primary className="mb-5" onClick={clickHandler}>
          <GoChevronRight />
          Click me
        </Button>
      </div>
      <div>
        <Button succes outline onMouseEnter={clickHandler}>
          <GoGitMerge />
          See deal
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoHubot />
          Reserve
        </Button>
      </div>
      <div>
        <Button secondary>Buy now</Button>
      </div>
      <div>
        <Button warning rounded>
          Try me
        </Button>
      </div>
    </div>
  );
};

export default App;
