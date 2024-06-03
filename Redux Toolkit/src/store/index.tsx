import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const songSlice = createSlice({
  name: "song",
  initialState: initialState,
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: { songs: songSlice.reducer },
});

console.log(JSON.stringify(store));
