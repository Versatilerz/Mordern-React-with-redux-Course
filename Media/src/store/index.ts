import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: { users: usersReducer },
});

// typescript setup for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// find everything thats exported from * and export it from index.ts aswell
export * from "./thunks/fetchUsers";
