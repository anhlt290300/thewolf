import { createSlice } from "@reduxjs/toolkit";

export const boxCartSlice = createSlice({
  name: "cartbox",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleBoxCart: (state, action) => {
      state.flag = !state.flag;
    },
    unableBoxCart: (state) => {
      state.flag = false;
    },
  },
});

export const { toggleBoxCart, unableBoxCart } = boxCartSlice.actions;
export default boxCartSlice.reducer;
