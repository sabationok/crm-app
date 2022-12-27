import { createSlice } from '@reduxjs/toolkit';
import { actionLogInUser, actionLogOutUser, actionSetCurrentUser } from './authActions';
import { userCurrent, userLogIn, userLogOut, userRegister } from './authThunks';
import { users, initialUserInfo } from 'data/users';

const initialState = initialUserInfo;

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: initialState,
  extraReducers: {
    // ? ТЕСТОВІ
    [actionLogInUser]: (state, { payload }) => {
      state.isLoading = false;

      const user = users.find(user => user.login === payload.data.login);

      console.log(user);

      if (!user) {
        payload.onError(404);
        return;
      }

      if (user.password !== payload.data.password) {
        payload.onError(400);
        return;
      }

      state.user = user;
      state.isLoggedIn = true;
      state.token = user.email;
      payload.onSuccess();
    },
    [actionLogOutUser]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.token = null;
      state.user = initialState;
      payload.onSuccess();
    },
    [actionSetCurrentUser]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      const user = users.find(user => user.email === state.token);
      state.user = user;
    },

    //* РЕЄСТРАЦІЯ
    [userRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = payload.user;
      // state.token = payload.token;
    },
    [userRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userRegister.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ВХІД
    [userLogIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [userLogIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },
    [userLogIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    //* ВИХІД
    [userLogOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.token = null;
    },
    [userLogOut.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
    },
    [userLogOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [userCurrent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [userCurrent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    [userCurrent.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
