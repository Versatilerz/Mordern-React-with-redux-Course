import { useEffect, useState } from "react";

const useCounter = ({ initCount }: { initCount: number }) => {
  const [counter, setcounter] = useState(initCount);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const increment = () => {
    setcounter(counter + 1);
  };

  return {
    counter,
    increment,
  };
};

export default useCounter;
