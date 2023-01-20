import { createSlice } from '@reduxjs/toolkit';
import { getAllRefundsThunk, addRefundThunk, deleteRefundThunk, editRefundThunk } from 'redux/refunds/refundsThunks';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionSelectRefundByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
} from 'redux/refunds/refundsActions';

const initialState = {
  refunds: [],
  isLoading: false,
  lastEditedId: null,
  error: null,
  markedRefunds: [],
  selectedRefundId: null,
  searchQuery: '',
  searchParam: '',
};

export const refundsSlice = createSlice({
  name: 'refunds',
  initialState,
  extraReducers: {
    [getAllRefundsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.refunds = [...action.payload];
    },
    [getAllRefundsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllRefundsThunk.pending](state, action) {
      state.isLoading = true;
    },

    [addRefundThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.refunds = [action.payload, ...state.refunds];
    },
    [addRefundThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addRefundThunk.pending](state, action) {
      state.isLoading = true;
    },

    [deleteRefundThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.refunds = state.refunds.filter(order => order.id !== action.payload.id);
    },
    [deleteRefundThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteRefundThunk.pending](state, action) {
      state.isLoading = true;
    },

    [editRefundThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [editRefundThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editRefundThunk.pending](state, action) {
      state.isLoading = true;
    },

    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
    },
    [actionChangeSearchParam](state, { payload }) {
      state.searchParam = payload.dataTitle;
    },
    [actionSelectRefundByClick](state, { payload }) {
      state.selectedPostId = payload;
    },
    [actionMarkCheckbox](state, action) {},
    [actionUnmarkCheckbox](state, action) {},
    [actionMarkAllCheckboxes](state, action) {
      console.log('marked all checkboxes');
    },
  },
});

export const refundsReducer = refundsSlice.reducer;
