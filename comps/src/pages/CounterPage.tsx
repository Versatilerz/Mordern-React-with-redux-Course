import { ChangeEvent, useReducer, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

type ReducerState = {
  counter: number;
  valueToAdd: number;
};

const reducer = (state: ReducerState) => {
  return {
    ...state,
    counter: state.counter + 1,
  };
};

const CounterPage: React.FC<{ initCount: number }> = ({ initCount }) => {
  // const { counter, increment } = useCounter({ initCount });
  // const [counter, setCounter] = useState(initCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    counter: initCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCounter(counter + 1);
    dispatch();
  };

  const decrement = () => {
    // setCounter(counter - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    console.log(value);
    // setValueToAdd(value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    // setCounter(counter + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.counter}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
