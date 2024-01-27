import { configureStore } from "@reduxjs/toolkit";

// this will import the reducers from the slice
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
