import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    newsLetter: builder.mutation({
      query: ({ email }) => ({
        method: 'POST',
        url: '/newsletter',
        body: {
          email,
        },
      }),
    }),
  }),
});

export const { useNewsLetterMutation } = extendedApiSlice;
