import { apiSlice } from '../api/apiSlice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    checkoutItems: builder.mutation({
      query: line_items => ({
        url: '/checkout/create-checkout-session',
        method: 'post',
        body: { line_items },
      }),
    }),
  }),
});

export const { useCheckoutItemsMutation } = extendedApiSlice;
