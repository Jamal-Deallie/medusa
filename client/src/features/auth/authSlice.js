import { createSlice} from '@reduxjs/toolkit';


const initialState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : '',
  name: localStorage.getItem('name')
    ? JSON.parse(localStorage.getItem('name'))
    : '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.name;
      localStorage.setItem('token', JSON.stringify(state.token));
      localStorage.setItem('name', JSON.stringify(state.name));
    },
    logOut: (state, { payload }) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("name");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectToken = state => state.auth.token;

export const selectUser = state => state.auth.name;

export const authReducer = authSlice.reducer;
