import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

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
});

const store = configureStore({
  reducer: { songs: songSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const { addSong, removeSong } = songSlice.actions;
export { store };

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!",
// });

// const finalstate = store.getState();
// console.log(JSON.stringify(finalstate));
