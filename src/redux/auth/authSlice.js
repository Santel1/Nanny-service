import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { loginUser, logoutUser, registerUser } from "./authThunk";

const INITIAL_STATE = {
  user: {
    id: null,
    email: null,
    name: null,
    token: null,
  },
  isSignedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = {
          id: action.payload.uid,
          email: action.payload.email,
          name: action.payload.displayName,
          token: action.payload.accessToken,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = {
          id: action.payload.uid,
          email: action.payload.email,
          name: action.payload.displayName,
          token: action.payload.accessToken,
        };
      })
      .addCase(logoutUser.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addMatcher(
        isAnyOf(logoutUser.pending, registerUser.pending, loginUser.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(logoutUser.rejected, registerUser.rejected, loginUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
