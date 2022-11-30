import { createSlice } from '@reduxjs/toolkit';

import { actionSetPage, actionSetDevice } from './pageActions';

const initialState = {
  page: {
    title: '',
    parentPath: '',
    path: '',
    iconId: '',
  },
  device: '',
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  extraReducers: {
    [actionSetPage]: (state, action) => {
      state.page = action.payload;
    },
    [actionSetDevice]: (state, action) => {
      state.device = action.payload;
    },
  },
});

export const appPageReducer = appPageSlice.reducer;
