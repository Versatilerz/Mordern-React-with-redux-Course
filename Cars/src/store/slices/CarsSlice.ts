import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
      state.cars.push(action.payload);
    },
    removeCar(state, action: PayloadAction<number>) {
      const updated = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = CarsSlice.actions;
export const carsReducer = CarsSlice.reducer;
