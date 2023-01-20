import { createAction } from '@reduxjs/toolkit';

export const actionChangeSearchQuery = createAction('refunds/actionChangeSearchQuery');
export const actionChangeSearchParam = createAction('refunds/actionChangeSearchParam');
export const actionMarkCheckbox = createAction('refunds/actionMarkCheckbox');
export const actionMarkAllCheckboxes = createAction('refunds/actionMarkAllCheckboxes');
export const actionUnmarkCheckbox = createAction('refunds/actionUnmarkCheckbox');

export const actionSelectRefundByClick = createAction('refunds/actionSelectRefundByClick');
