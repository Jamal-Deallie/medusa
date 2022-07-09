import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const productAdapter = createEntityAdapter({
  selectId: data => data._id,
});

const initialState = productAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
      transformResponse: response => {
        const loadedProducts = response.data.data.reduce((acc, curr) => {
          acc[curr._id] = curr;
          return acc;
        }, {});

        return productAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: ['Product'],
    }),
    getProductsByCategory: builder.query({
      query: category => `/products?category=${category}`,
    }),
    getProductsById: builder.query({
      query: _id => `/products/${_id}`,
      transformResponse: response => {
        const { data } = response.data;

        const loadedProduct = [data].reduce((acc, curr) => {
          acc[curr._id] = curr;
          return acc;
        }, {});
        return productAdapter.setAll(initialState, loadedProduct);
      },
      providesTags: ['Product'],
    }),
    getProductsBySearch: builder.query({
      query: term => `/products/search?term=${term}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useGetProductsByCategoryQuery,
  useGetProductsBySearchQuery,
} = extendedApiSlice;

// returns the query result object
export const selectProductsResult =
  extendedApiSlice.endpoints.getProducts.select();

// Creates memoized selector
export const selectProductsData = createSelector(
  selectProductsResult,
  productsResult => productsResult.data

  // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductIds,
  // Pass in a selector that returns the products slice of state
} = productAdapter.getSelectors(
  state => selectProductsData(state) ?? initialState
);
