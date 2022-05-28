import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import { cartReducer } from '../features/cart/cartSlice';
import {authReducer} from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
