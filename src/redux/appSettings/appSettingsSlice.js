import { createSlice } from '@reduxjs/toolkit';

import { actionChangeTheme } from './appSettingsActions';

const initialState = {
  isDarkTheme: true,
};

export const appSettingsSlice = createSlice({
  name: 'appSettings',
  initialState,
  extraReducers: {
    [actionChangeTheme]: (state, action) => {
      state.isDarkTheme = !state.isDarkTheme;
      console.log(action);
    },
  },
});

export const appSettingsReducer = appSettingsSlice.reducer;