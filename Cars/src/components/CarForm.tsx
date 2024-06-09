import { ChangeEvent, FormEvent } from "react";
import { addCar, changeCost, changeName } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const CarForm = () => {
  const dispatch = useAppDispatch();
  const { name, cost } = useAppSelector((state) => state.form);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCost(event.target.valueAsNumber || 0));
  };

  const handleSubmit = (event: FormEvent<Element>) => {
    event.preventDefault();

    dispatch(
      addCar({
        name: name,
        cost: cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="cost">
              Cost
            </label>
            <input
              id="cost"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default CarForm;
