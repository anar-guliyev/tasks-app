import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    isAuth: authReducer,
    tasks: tasksReducer,
  },
});
