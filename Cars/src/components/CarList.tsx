import { removeCar } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Car } from "../store/slices/formSlice";

const CarList = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id || ""));
  };

  const renderedCars = data.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
};
export default CarList;
