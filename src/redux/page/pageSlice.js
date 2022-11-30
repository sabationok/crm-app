import { createSlice } from '@reduxjs/toolkit';

import { actionSetPage } from './pageActions';

const initialState = {
  page: {
    title: '',
    path: '',
    iconId: '',
    mobilelinks: [
      { title: 'Список завдань', path: 'tasks/list', iconId: 'list', actions: 'filtered' },
      { title: 'Деталі завдання', path: 'tasks/task', iconId: 'info', actions: 'primary' },
      { title: 'Сповіщення', path: 'tasks/notifications', iconId: 'notifications', actions: 'primary' },
    ],
  },
};

export const appPageSlice = createSlice({
  name: 'appPage',
  initialState,
  extraReducers: {
    [actionSetPage]: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const appPageReducer = appPageSlice.reducer;
