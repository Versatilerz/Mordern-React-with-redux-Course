import { useAppSelector } from "../store/hooks";

const CarValue = () => {
  const totalCost = useAppSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">Total Costs: ${totalCost}</div>;
};
export default CarValue;
