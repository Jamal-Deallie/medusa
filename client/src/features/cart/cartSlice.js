import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  totalQuantity: localStorage.getItem('totalQuantity')
    ? JSON.parse(localStorage.getItem('totalQuantity'))
    : 0,
  subtotal: localStorage.getItem('subtotal')
    ? JSON.parse(localStorage.getItem('subtotal'))
    : 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      //if item does not exist it returns -1, if it does exist it returns the item's index
      const itemAdded = state.cartItems.find(item => item._id === payload._id);
      if (itemAdded) {
        itemAdded.quantity++;
        state.totalQuantity++;
        itemAdded.price += payload.price;
        state.subtotal += payload.price;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
        state.totalQuantity++;
        state.subtotal += payload.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem('subtotal', JSON.stringify(state.subtotal));
    },
    increaseQuantity: (state, { payload }) => {
      console.log(payload);
      const itemAdded = state.cartItems.find(item => item._id === payload._id);

      if (itemAdded) {
        itemAdded.quantity++;
        state.totalQuantity++;
        itemAdded.price += payload.price;
        state.subtotal += payload.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem(
        'totalQuantity',
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem('subtotal', JSON.stringify(state.subtotal));
    },
    decrementQuantity: (state, { payload }) => {
      let cartItem = state.cartItems.find(item => item._id === payload._id);
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        item => item._id !== payload._id
      );
    },
    getCartTotal: (state, { payload }) => {},
  },
  clearCart: (state, { payload }) => {
    state.cartItems = [];
  },
});

export const {
  addItem,
  decrementQuantity,
  increaseQuantity,
  removeItem,
  getCartTotal,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = state => state.cart.cartItems;
export const selectCartQuantity = state => state.cart.totalQuantity;
export const selectCartSubtotal = state => state.cart.subtotal;

export const cartReducer = cartSlice.reducer;