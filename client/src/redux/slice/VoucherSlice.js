import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVoucher } from "../../api/voucher";

export const getVoucherRedux = createAsyncThunk(
  "/voucher/getVoucher",
  async (_, thunkAPI) => {
    try {
      const res = await getVoucher();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const voucherSlice = createSlice({
  name: "voucher",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: "abc",
    open: false,
  },

  reducers: {
    toggleBoxVoucher: (state, action) => {
      state.open = !state.open;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVoucherRedux.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getVoucherRedux.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(getVoucherRedux.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

 export const { toggleBoxVoucher } = voucherSlice.actions;
export default voucherSlice.reducer;
