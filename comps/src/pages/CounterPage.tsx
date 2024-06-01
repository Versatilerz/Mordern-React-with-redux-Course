import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

const CounterPage: React.FC<{ initCount: number }> = ({ initCount }) => {
  const { counter, increment } = useCounter({ initCount });

  return (
    <div>
      <h1>Count is {counter}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default CounterPage;
