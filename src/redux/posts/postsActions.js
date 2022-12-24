import { createAction } from '@reduxjs/toolkit';

export const actionChangeSearchQuery = createAction('posts/actionChangeSearchQuery');
export const actionMarkCheckbox = createAction('posts/actionMarkCheckbox');
export const actionMarkAllCheckboxes = createAction('posts/actionMarkAllCheckboxes');
export const actionUnMarkAllCheckboxes = createAction('posts/actionUnMarkAllCheckboxes');
export const actionUnmarkCheckbox = createAction('posts/actionUnmarkCheckbox');

export const actionTogglePostVisibility = createAction('posts/actionTogglePostVisibility');
export const actionDeletePost = createAction('posts/actionDeletePost');
export const actionApprovePost = createAction('posts/actionApprovePost');
export const actionRejectPost = createAction('posts/actionRejectPost');
export const actionArchivePost = createAction('posts/actionArchivePost');

export const actionSelectPostByClick = createAction('posts/actionSelectPostByClick');
export const actionChangeSearchParam = createAction('posts/actionChangeSearchParam');
