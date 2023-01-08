import { createSlice } from '@reduxjs/toolkit';
// import { actionLogInUser, actionLogOutUser, actionSetCurrentUser } from './authActions';
import { userCurrent, userLogIn, userLogOut, userRegister, userRegisterByAdmin } from './authThunks';
import { initialUserInfo } from 'data/users';

const initialState = {
  user: initialUserInfo,
  token: '',
  isLoading: false,
  isLoggedIn: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: initialState,
  extraReducers: {
    // ? ТЕСТОВІ
    // [actionLogInUser]: (state, { payload }) => {
    //   state.isLoading = false;

    //   const user = users.find(user => user.login === payload.data.login);

    //   console.log(user);

    //   if (!user) {
    //     payload.onError(404);
    //     return;
    //   }

    //   if (user.password !== payload.data.password) {
    //     payload.onError(400);
    //     return;
    //   }

    //   state.user = user;
    //   state.isLoggedIn = true;
    //   state.token = user.email;
    //   payload.onSuccess();
    // },
    // [actionLogOutUser]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = false;
    //   state.token = null;
    //   state.user = initialState;
    //   payload.onSuccess();
    // },
    // [actionSetCurrentUser]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.isLoggedIn = true;
    //   const user = users.find(user => user.email === state.token);
    //   state.user = user;
    // },

    //* РЕЄСТРАЦІЯ
    [userRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;

      console.log(payload);
    },
    [userRegister.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    // * РЕЄСТРАЦІЯ АДМІНІСТРАТОРОМ
    [userRegisterByAdmin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [userRegisterByAdmin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userRegisterByAdmin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    //* ВХІД
    [userLogIn.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = payload.access_token;
    },
    [userLogIn.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [userLogIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload.error;
    },

    //* ВИХІД
    [userLogOut.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialState.user;
      state.token = null;
    },
    [userLogOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userLogOut.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload.error;
    },
    //* ПОТОЧНИЙ ЮЗЕР
    [userCurrent.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = true;

      state.user.email = payload;
    },
    [userCurrent.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userCurrent.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.isLoggedIn = false;
    },
  },
});

export const userReducer = userAuthSlice.reducer;
