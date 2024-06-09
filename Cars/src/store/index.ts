import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/CarsSlice";
import { formReducer } from "./slices/formSlice";
import { addCar, removeCar, changeSearchTerm } from "./slices/CarsSlice";
import { changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: { cars: carsReducer, form: formReducer },
});

// typescript setup for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
export { addCar, removeCar, changeSearchTerm, changeCost, changeName };
