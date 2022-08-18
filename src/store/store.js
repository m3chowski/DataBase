import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/charactersSlice";

export const store = configureStore({
  reducer: {
    characters,
  },
});
