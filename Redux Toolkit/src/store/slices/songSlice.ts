import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const initialState: string[] = [];

const songSlice = createSlice({
  name: "song",
  initialState: initialState,
  reducers: {
    // state is only the piece of state managed by this reducer (so song array)
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state, action: PayloadAction<string>) {
      //use splice instead of filter for deleting an item from an array (better performance)
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

export const { addSong, removeSong } = songSlice.actions;
export const songsReducer = songSlice.reducer;
