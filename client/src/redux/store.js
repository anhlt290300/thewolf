import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./slice/BurgerSlice";
import markReducer from "./slice/MarkSlice";
export default configureStore({
  reducer: {
    burger: burgerReducer,
    mark: markReducer,
  },
});
