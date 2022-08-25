import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/charactersSlice";
import episodes from "./slices/episodesSlice";

export const store = configureStore({
  reducer: {
    characters,
    episodes,
  },
});
