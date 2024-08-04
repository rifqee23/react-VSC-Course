import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = { cart: [] };

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// store
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("oncreate store : ", store.getState());

// subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispatch
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login());
