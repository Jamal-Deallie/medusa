import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    contactUs: builder.mutation({
      query: ({ email, name, inquiry }) => ({
        method: 'POST',
        url: '/newsletter',
        body: {
          email,
          name,
          inquiry,
        },
      }),
    }),
  }),
});

export const { useContactUsMutation } = extendedApiSlice;
