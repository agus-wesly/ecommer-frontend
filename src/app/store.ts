import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { productApi } from "../api/product";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
