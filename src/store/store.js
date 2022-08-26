import { configureStore } from "@reduxjs/toolkit";
import characters from "./slices/charactersSlice";
import episodes from "./slices/episodesSlice";
import navigation from "./slices/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation,
    characters,
    episodes,
  },
});
