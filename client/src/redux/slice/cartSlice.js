import { createSlice } from "@reduxjs/toolkit";

const setup = () => {
  let cart =
    localStorage.getItem("cart-thewolf") !== null
      ? JSON.parse(localStorage.getItem("cart-thewolf"))
      : [];

  let cartlength = 0;

  cart.forEach((el) => (cartlength += el.quantity));

  return {
    cart: cart,
    cartlength: cartlength,
  };
};

const initialState = setup();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let item = action.payload;
      let length = state.cartlength;
      length += item.quantity;
      state.cartlength = length;
      if (state.cart.some((el) => el.id === item.id && el.size === item.size)) {
        //console.log("vao");
        let result = state.cart.map((el) => {
          if (el.id === item.id && el.size === item.size) {
            el.quantity += item.quantity;
            return el;
          } else return el;
        });
        state.cart = [...result];
        localStorage.setItem("cart-thewolf", JSON.stringify(state.cart));
      } else {
        state.cart = [...state.cart, item];
        localStorage.setItem("cart-thewolf", JSON.stringify(state.cart));
      }
    },
    updateItem: (state, action) => {
      let { id, quantity } = action.payload;
      let length = state.cartlength;
      let result = state.cart.map((el) => {
        if (el.id === id) {
          length = length - el.quantity + quantity;
          el.quantity = quantity;
          return el;
        } else return el;
      });
      state.cart = [...result];
      state.cartlength = length;
      localStorage.setItem("cart-thewolf", JSON.stringify(state.cart));
    },
    deleteItem: (state, action) => {
      let id = action.payload;
      let result = [];
      let length = state.cartlength;
      state.cart.forEach((element) => {
        if (element.id !== id) result.push(element);
        else length -= element.quantity;
      });
      state.cart = [...result];
      state.cartlength = length;
      localStorage.setItem("cart-thewolf", JSON.stringify(state.cart));
    },
  },
});

export const { addItem, updateItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
