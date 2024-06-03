import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const songSlice = createSlice({
  name: "song",
  initialState: initialState,
  reducers: {
    // state is only the piece of state managed by this reducer
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

console.log(songSlice.actions);

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!",
// });

// const finalstate = store.getState();
// console.log(JSON.stringify(finalstate));
