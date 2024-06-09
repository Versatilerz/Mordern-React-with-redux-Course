import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Car } from "./formSlice";

type dataSliceIS = {
  searchTerm: string;
  data: Car[];
};

const initialState: dataSliceIS = {
  searchTerm: "",
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Car>) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string>) {
      const updated = state.data.filter((car) => car.id !== action.payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = dataSlice.actions;
export const carsReducer = dataSlice.reducer;
