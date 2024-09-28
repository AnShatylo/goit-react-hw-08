import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, state => {
        state.error = false;
        return initialState;
      })
      .addCase(logOut.rejected, state => {
        state.error = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.error = false;
        }
      )
      .addMatcher(
        isAnyOf(register.rejected, logIn.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
