import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./actions/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

export default store;
