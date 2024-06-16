import { createSlice } from "@reduxjs/toolkit";

type Users = {
  data: [];
};

const initialState: Users = {
  data: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
