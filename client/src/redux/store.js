import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./slice/BurgerSlice";
import markReducer from "./slice/MarkSlice";
import cartboxReducer from "./slice/BoxCartSlice";
import cartReducer from "./slice/cartSlice";
import searchboxReducer from "./slice/BoxSearchSlice";
import searchReducer from "./slice/SearchSlice";
import voucherSlice from "./slice/VoucherSlice";
import fundiiSlice from "./slice/FundiiSlice";
export default configureStore({
  reducer: {
    burger: burgerReducer,
    mark: markReducer,
    cartbox: cartboxReducer,
    cart: cartReducer,
    searchbox: searchboxReducer,
    search: searchReducer,
    voucher: voucherSlice,
    fundii: fundiiSlice,
  },
});
