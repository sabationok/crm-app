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
    //* ВХІД
    [logInUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.access_token;
    },
    [logInUserThunk.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [logInUserThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },

    //* ВИХІД
    [logOutUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialUserAuthInfo.user;
      state.token = null;
    },
    [logOutUserThunk.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logOutUserThunk.rejected]: (state, action) => {
      state.isLoading = true;
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
