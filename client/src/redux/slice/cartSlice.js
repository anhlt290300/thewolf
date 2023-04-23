import { createSlice } from "@reduxjs/toolkit";

const setup = () => {
  let cart =
    localStorage.getItem("cart-thewolf") !== null
      ? JSON.parse(localStorage.getItem("cart-thewolf"))
      : [];

  //   const listdelete = JSON.parse(localStorage.getItem("listdelete"))
  //     ? JSON.parse(localStorage.getItem("listdelete"))
  //     : [];

  //   listdelete.forEach((element) => {
  //     cart = cart.filter(
  //       (el) =>
  //         el.id !== element.id ||
  //         (el.id === element.id && el.size !== element.size)
  //     );
  //   });

  //   localStorage.setItem("listdelete", JSON.stringify([]));
  //   localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

const initialState = { cart: setup() };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let item = action.payload;

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
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
