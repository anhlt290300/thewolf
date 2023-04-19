import { createSlice } from "@reduxjs/toolkit";

export const markSlice = createSlice({
  name: "mark",
  initialState: {
    flag: false,
  },
  reducers: {
    toggleMark: (state) => {
      state.flag = !state.flag;
    },
  },
});

export const { toggleMark } = markSlice.actions;
export default markSlice.reducer;