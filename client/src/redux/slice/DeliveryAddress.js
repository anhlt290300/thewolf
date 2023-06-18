import { createSlice } from "@reduxjs/toolkit";

export const deliveryAddressSlice = createSlice({
  name: "deliveryaddress",
  initialState: {
    province: undefined,
    district: undefined,
    ward: undefined,
  },
  reducers: {
    updateAddress: (state, action) => {
      const { province, district, ward } = action.payload;
      if (province) {
        if (province !== "null") state.province = province;
        else state.province = undefined;
        state.district = undefined;
        state.ward = undefined;
      }
      if (district) {
        if (district !== "null") state.district = district;
        else state.district = undefined;
        state.ward = undefined;
      }
      if (ward)
        if (ward !== "null") state.ward = ward;
        else state.ward = undefined;
    },
    clearAddress: (state, action) => {
      state.province = undefined;
      state.district = undefined;
      state.ward = undefined;
    },
  },
});

export const { updateAddress, clearAddress } = deliveryAddressSlice.actions;
export default deliveryAddressSlice.reducer;
