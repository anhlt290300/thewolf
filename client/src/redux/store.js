import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./slice/BurgerSlice";
import markReducer from "./slice/MarkSlice";
import cartboxReducer from "./slice/BoxCartSlice";
import cartReducer from "./slice/cartSlice";
import searchboxReducer from "./slice/BoxSearchSlice";
import searchReducer from './slice/SearchSlice'
export default configureStore({
  reducer: {
    burger: burgerReducer,
    mark: markReducer,
    cartbox: cartboxReducer,
    cart: cartReducer,
    searchbox: searchboxReducer,
    search : searchReducer
  },
});
