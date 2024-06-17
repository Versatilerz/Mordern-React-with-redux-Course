import { SerializedError, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

type User = {
  id: string;
  name: string;
};

type Users = {
  data: User[];
  isLoading: boolean;
  error: null | SerializedError;
};

const initialState: Users = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error as SerializedError;
    });
  },
});

export const usersReducer = usersSlice.reducer;
