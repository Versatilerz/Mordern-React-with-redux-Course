import { ChangeEvent, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

type ReducerState = {
  counter: number;
  valueToAdd?: number;
};

enum Action {
  INCREMENT_COUNT = "INCREMENT_COUNT-count",
  DECREMENT_COUNT = "DECREMENT_COUNT-count",
  VALUE_TO_ADD = "value-to-add",
}

type ReducerAction = {
  type: Action;
  payload?: number | undefined;
};

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case Action.INCREMENT_COUNT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Action.DECREMENT_COUNT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case Action.VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      return state;
  }
};

const CounterPage: React.FC<{ initCount: number }> = ({ initCount }) => {
  // const { counter, INCREMENT_COUNT } = useCounter({ initCount });
  // const [counter, setCounter] = useState(initCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    counter: initCount,
    valueToAdd: 0,
  });

  const INCREMENT_COUNT = () => {
    // setCounter(counter + 1);
    dispatch({
      type: Action.INCREMENT_COUNT,
    });
  };

  const DECREMENT_COUNT = () => {
    // setCounter(counter - 1);
    dispatch({
      type: Action.DECREMENT_COUNT,
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    dispatch({
      type: Action.VALUE_TO_ADD,
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
        <Button onClick={INCREMENT_COUNT}>INCREMENT_COUNT</Button>
        <Button onClick={DECREMENT_COUNT}>DECREMENT_COUNT</Button>
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
