import { createSlice } from "@reduxjs/toolkit";
import dairyItems from "../pages/Dairyproductdata";

const initialState = {
  cart: [],
  Items: dairyItems,
  totalPrice: 0,
  totalQuantity: 0,
};

export const productData = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    getCartTotal: (state) => {
      let totalPrice = 0;
      let totalQuantity = 0;

      state.cart.forEach(({ cost, quantity }) => {
        totalPrice += cost * quantity;
        totalQuantity += quantity;
      });

      state.totalPrice = Math.round(totalPrice); // updating state
      state.totalQuantity = totalQuantity; // updating state
    },

  },
});

export const { addtocart, removeItem,getCartTotal } = productData.actions;
export default productData.reducer;
