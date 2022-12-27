import { createAction } from '@reduxjs/toolkit';

export const actionLogInUser = createAction('auth/actionLogInUser');
export const actionLogOutUser = createAction('auth/actionLogOutUser');
export const actionSetCurrentUser = createAction('auth/actionSetCurrentUser');
