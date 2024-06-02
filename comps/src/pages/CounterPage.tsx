import { ChangeEvent, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

type ReducerState = {
  counter: number;
  valueToAdd?: number;
};

enum Action {
  Increment = "increment-count",
  Decrement = "decrement-count",
  AddValue = "value-to-add",
}

type ReducerAction = {
  type: Action;
  payload?: number | undefined;
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  if (action.type === Action.Increment) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === Action.Decrement) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === Action.AddValue) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  } else return state;
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
    dispatch({
      type: Action.Increment,
    });
  };

  const decrement = () => {
    // setCounter(counter - 1);
    dispatch({
      type: Action.Decrement,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: Action.AddValue,
      payload: value,
    });
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
