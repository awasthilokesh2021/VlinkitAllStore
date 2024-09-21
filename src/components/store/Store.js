import { configureStore } from "@reduxjs/toolkit";
import  productData  from "../features/Cartslice";

const store = configureStore({
  reducer: {
    cartData:productData
  },
});

export default store;
