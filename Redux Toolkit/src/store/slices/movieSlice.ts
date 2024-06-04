import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const initialState: string[] = [];

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    addMovie(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<string>) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
