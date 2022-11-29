import { createSlice } from '@reduxjs/toolkit';

import { actionAddNotify } from './notificationsActions';

const initialState = {
  notifications: [],
};

export const appNotifySlice = createSlice({
  name: 'appNotify',
  initialState,
  extraReducers: {
    [actionAddNotify]: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
      console.log(action);
    },
  },
});

export const appNotifyReducer = appNotifySlice.reducer;
