import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/customerSlice";

export const store = configureStore({
  reducer: {
    customers: customerSlice,
  },
});
