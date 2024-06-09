import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Car = {
  name: string;
  costs: number;
  id: number;
};

const initialState = {
  name: "",
  costs: 0,
};

const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.costs = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions;

export const formReducer = formSlice.reducer;
