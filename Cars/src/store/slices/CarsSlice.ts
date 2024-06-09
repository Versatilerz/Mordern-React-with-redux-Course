import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Car } from "./formSlice";

type CarsSliceIS = {
  searchTerm: string;
  cars: Car[];
};

const initialState: CarsSliceIS = {
  searchTerm: "",
  cars: [],
};

const CarsSlice = createSlice({
  name: "cars",
  initialState: initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Car>) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = CarsSlice.actions;
export const carsReducer = CarsSlice.reducer;
