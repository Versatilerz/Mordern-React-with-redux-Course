import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm } from "../store";
import { ChangeEvent } from "react";

const CarSearch = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">
        <div className="search field is-horizontal">
          <label className="label" htmlFor="search"></label>
          <input
            type="text"
            id="search"
            className="input"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </h3>
    </div>
  );
};
export default CarSearch;
