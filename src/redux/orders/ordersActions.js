import { createAction } from '@reduxjs/toolkit';

export const actionChangeSearchQuery = createAction('orders/actionChangeSearchQuery');
export const actionChangeSearchParam = createAction('orders/actionChangeSearchParam');
export const actionMarkCheckbox = createAction('orders/actionMarkCheckbox');
export const actionMarkAllCheckboxes = createAction('orders/actionMarkAllCheckboxes');
export const actionUnmarkCheckbox = createAction('orders/actionUnmarkCheckbox');

export const actionDeleteOrder = createAction('orders/actionDeleteOrder');
export const actionArchiveOrder = createAction('orders/actionArchiveOrder');
export const actionAcceptOrder = createAction('orders/actionAcceptOrder');
export const actionDeclineOrder = createAction('orders/actionDeclineOrder');

export const actionSelectOrderByClick = createAction('orders/actionSelectOrderByClick');
