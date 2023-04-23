import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./slice/BurgerSlice";
import markReducer from "./slice/MarkSlice";
import cartboxReducer from "./slice/BoxCartSlice";
import cartReducer from "./slice/cartSlice";
export default configureStore({
  reducer: {
    burger: burgerReducer,
    mark: markReducer,
    cartbox: cartboxReducer,
    cart: cartReducer,
  },
});
