import { ChangeEvent, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
// import useCounter from "../hooks/use-counter";

type ReducerState = {
  counter: number;
  valueToAdd?: number;
};

enum Action {
  INCREMENT_COUNT = "increment_count",
  DECREMENT_COUNT = "decrement_count",
  VALUE_TO_ADD = "value_to_add",
  ADDING_TO_COUNT = "adding_to_count",
}

type ReducerAction = {
  type: Action;
  payload?: number;
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
    case Action.ADDING_TO_COUNT:
      return {
        ...state,
        counter: state.counter + (state.valueToAdd || 0),
        valueToAdd: 0,
      };
    default:
      return state;
  }
};

const CounterPage: React.FC<{ initCount: number }> = ({ initCount }) => {
  // const { counter, INCREMENT_COUNT } = useCounter({ initCount });
  const [state, dispatch] = useReducer(reducer, {
    counter: initCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: Action.INCREMENT_COUNT,
    });
  };

  const decrement = () => {
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

    dispatch({
      type: Action.ADDING_TO_COUNT,
    });
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
