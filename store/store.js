import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import navSlice from "./slices/navSlice";
import postSlice from "./slices/postSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    nav: navSlice,
    posts: postSlice,
    order: orderSlice,
  },
});
