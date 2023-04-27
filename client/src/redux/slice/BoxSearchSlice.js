import { createSlice } from "@reduxjs/toolkit";

export const boxSearchSlice = createSlice({
  name: "searchbox",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleBoxSearch: (state, action) => {
      state.flag = !state.flag;
    },
    unableBoxSearch: (state) => {
      state.flag = false;
    },
  },
});

export const { toggleBoxSearch, unableBoxSearch } = boxSearchSlice.actions;
export default boxSearchSlice.reducer;
