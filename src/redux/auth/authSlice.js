import { createSlice } from '@reduxjs/toolkit';
import { userCurrent, userLogIn, userLogOut, userRegister } from './authThunks';

const initialState = {
  user: {
    createdAt: '', // * date
    id: '21651asv165s1fv', // * string
    name: 'Valeria Baranovka', // * string
    type: 'manager', // * string
    email: 'valeria@mail.com', // * string
    phone: '+3806543218', // * string
    // !! only for VENDORS
    companyName: '', // * stringF
    brandsList: [], // * array of string
    mangerId: [], // * array of string
    // !! only for MANAGERS
    vendorslist: [], // * array of string },
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

export const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: {
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
