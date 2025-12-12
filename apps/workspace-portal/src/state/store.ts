import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice"
import countReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    counter: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
