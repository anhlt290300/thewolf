import { createSlice } from "@reduxjs/toolkit";

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleBurger: (state, action) => {
      state.flag = !state.flag;
    },
    unableBurger: (state) => {
      state.flag = false;
    },
  },
});

export const { toggleBurger, unableBurger } = burgerSlice.actions;
export default burgerSlice.reducer;
