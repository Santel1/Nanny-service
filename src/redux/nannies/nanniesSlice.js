import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchData } from "./nanniesThunk";

const INITIAL_STATE = {
  nannies: null,
  favorites: [],
  isLoading: false,
  error: null,
  selectedFilter: "",
};

const nanniesSlice = createSlice({
  name: "nanny",
  initialState: INITIAL_STATE,
  reducers: {
    addFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (favorites) => favorites.id !== action.payload.id
      );
    },
    changeFilter(state, action) {
      state.selectedFilter = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.nannies = action.payload;
      })
      .addMatcher(isAnyOf(fetchData.pending), (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(fetchData.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addFavorites, deleteFavorites, changeFilter } =
  nanniesSlice.actions;

export const nanniesReducer = nanniesSlice.reducer;
