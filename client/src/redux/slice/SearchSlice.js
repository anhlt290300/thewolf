import { createSlice } from "@reduxjs/toolkit";
import { getProductByKey } from "../../assets/fakeData/products";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
  },
  reducers: {
    search: (state, actions) => {
      let key = actions.payload;
      let result = getProductByKey(key);
      state.data = result;
    },
  },
});

export const { search } = searchSlice.actions;
export default searchSlice.reducer;
