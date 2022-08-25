import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  episodes: [],
  loading: false,
};

export const fetchEpisodes = createAsyncThunk(
  "episodes/fetchEpisodes",
  async (params) => {
    const { fetchEpisode } = params;
    const { data } = await axios.get(
      `https://www.breakingbadapi.com/api/episodes${fetchEpisode}`
    );
    return data;
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEpisodes.pending]: (state) => {
      state.loading = true;
    },
    [fetchEpisodes.fulfilled]: (state, action) => {
      state.loading = false;
      state.episodes = action.payload;
    },
  },
});

export default episodesSlice.reducer;
