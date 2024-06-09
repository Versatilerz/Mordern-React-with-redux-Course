import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarsSlice";

export type Car = {
  name: string;
  cost: number;
  id?: string;
};

const initialState = {
  name: "",
  cost: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
