import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: { users: usersReducer, [albumsApi.reducerPath]: albumsApi.reducer },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

// // typescript setup for useDispatch and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Get the type of our store variable
// export type AppStore = typeof store;
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore["getState"]>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = AppStore["dispatch"];

// find everything thats exported from * and export it from index.ts aswell
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
