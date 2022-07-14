import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const userAdapter = createEntityAdapter({
  selectId: data => data.id,
});

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUpUser: builder.mutation({
      query: ({ firstName, lastName, email, password, passwordConfirm }) => ({
        method: 'POST',
        url: '/users/signup',
        body: {
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        },
      }),
    }),
    signInUser: builder.mutation({
      query: ({ email, password }) => ({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        url: '/users/signin',
        body: { email, password },
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ email }) => ({
        url: '/users/forgotPassword',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, password, passwordConfirm }) => ({
        url: `/users/forgotPassword${token}`,
        method: 'post',
        body: { password, passwordConfirm },
      }),
    }),
    getMe: builder.query({
      query: () => `/users/getme`,
      transformResponse: response => {
        const { data } = response;
        return userAdapter.setAll(initialState, data);
      },
      providesTags: ['User'],
    }),
    getLogout: builder.query({
      query: () => `/users/logout`,
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetMeQuery,
  useGetLogoutQuery,
} = extendedApiSlice;

export const selectUserResults = extendedApiSlice.endpoints.getMe.select();

export const selectUserData = createSelector(
  selectUserResults,
  UserResult => UserResult.data

  // normalized state object with ids & entities
);

export const {
  selectAll: selectMe,
  // Pass in a selector that returns the transaction slice of state
} = userAdapter.getSelectors(state => selectUserData(state) ?? initialState);

export const selectName = createSelector(
  selectMe,
  UserResult => UserResult.map(user => user.firstName)

  // normalized state object with ids & entities
);
