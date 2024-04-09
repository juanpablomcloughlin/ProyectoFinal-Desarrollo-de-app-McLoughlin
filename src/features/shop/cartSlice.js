import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    user: "userLogged",
    updatedAt: new Date().toLocaleString(),
    total: null,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { title, quantity, price } = action.payload;
      const existingItem = state.items.find(item => item.title === title);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ title, quantity, price });
      }
      
      state.total = state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      state.updatedAt = new Date().toLocaleString();
    },
    removeAllItemsAction: (state) => {
      state.items = [];
      state.total = 0;
      state.updatedAt = new Date().toLocaleString();
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.updatedAt = new Date().toLocaleString();
    },
  },
});

export const { addItem, removeAllItemsAction, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
