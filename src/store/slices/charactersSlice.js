import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  characters: [],
  loading: false,
  isSeries: "Better Call Saul",
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (params) => {
    const { fetchChars } = params;
    const { data } = await axios.get(
      `https://www.breakingbadapi.com/api/characters${fetchChars}`
    );
    return data;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setSeries: (state, action) => {
      state.isSeries = action.payload;
    },
  },
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.loading = false;
      state.characters = action.payload;
    },
  },
});

export const { setSeries } = charactersSlice.actions;
export default charactersSlice.reducer;
