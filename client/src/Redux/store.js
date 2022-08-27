import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./UserClice";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
