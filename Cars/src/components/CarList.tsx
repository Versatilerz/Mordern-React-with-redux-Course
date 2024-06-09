import { useAppSelector } from "../store/hooks";

const CarList = () => {
  const { data } = useAppSelector((state) => state.cars);

  return <div>CarList</div>;
};
export default CarList;
