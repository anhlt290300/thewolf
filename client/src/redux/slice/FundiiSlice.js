import { createSlice } from "@reduxjs/toolkit";

export const FundiiSlice = createSlice({
  name: "fundii",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleBoxFundii: (state, action) => {
      state.flag = !state.flag;
    },
    unableBoxCart: (state) => {
      state.flag = false;
    },
  },
});

export const { toggleBoxFundii } = FundiiSlice.actions;
export default FundiiSlice.reducer;
