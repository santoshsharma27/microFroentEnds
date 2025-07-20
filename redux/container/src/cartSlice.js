import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const payload = action.payload;
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
      }
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
