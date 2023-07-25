import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const authSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    logIn: state => {
      state.value = true;
    },
    logOut: state => {
      state.value = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
