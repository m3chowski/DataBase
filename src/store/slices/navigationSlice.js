import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSeries: "Breaking Bad",
  page: "characters",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSeries: (state, { payload }) => {
      state.isSeries = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});
export const { setSeries, setPage } = navigationSlice.actions;
export default navigationSlice.reducer;
