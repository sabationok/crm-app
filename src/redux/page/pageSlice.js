import { createSlice } from '@reduxjs/toolkit';

import { actionSetPage, actionSetDevice, actionSetIndexPage, actionSetSearchParams } from './pageActions';

const initialState = {
  page: {
    title: '',
    parentPath: '',
    path: '',
    iconId: '',
  },
  indexPage: 'orders',
  searchParams: {
    product: null,
    order: null,
    return: null,
  },
  isMobile: false,
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  extraReducers: {
    [actionSetPage]: (state, action) => {
      state.page = action.payload;
    },
    [actionSetDevice]: (state, action) => {
      state.isMobile = action.payload;
    },
    [actionSetIndexPage]: (state, action) => {
      state.indexPage = action.payload;
    },
    [actionSetSearchParams]: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
  },
});

export const appPageReducer = appPageSlice.reducer;
