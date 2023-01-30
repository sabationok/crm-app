import { createSlice } from '@reduxjs/toolkit';
import { actionLogInUser, actionLogOutUser } from './auth.actions';
import { registerUserThunk, registerUserByAdminThunk, logInUserThunk, logOutUserThunk, getCurrentUserThunk } from './auth.thunks';
import { initialUserAuthInfo, registeredUserAuthInfo } from 'data';

export const authSlice = createSlice({
  name: 'auth',
  initialState: registeredUserAuthInfo,
  extraReducers: {
    // ? ПСЕУДОЛОГІНІЗАЦІЯ
    [actionLogInUser]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state = registeredUserAuthInfo;
      console.log(state);
    },
    [actionLogOutUser]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state = initialUserAuthInfo;
    },
    //* РЕЄСТРАЦІЯ
    [registerUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [registerUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // * РЕЄСТРАЦІЯ АДМІНІСТРАТОРОМ
    [registerUserByAdminThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [registerUserByAdminThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUserByAdminThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [getCurrentUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;

      state.user = { ...state.user, ...payload };
    },
    [getCurrentUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
