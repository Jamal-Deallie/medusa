import { createSlice, current } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '',

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      localStorage.setItem('token', JSON.stringify(state.token));
    },
    logOut: (state, { payload }) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.user;

export const authReducer = authSlice.reducer;
