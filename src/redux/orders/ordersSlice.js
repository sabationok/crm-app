import { createSlice } from '@reduxjs/toolkit';
import { getAllOrdersThunk, addOrderThunk, deleteOrderThunk, editOrderThunk } from 'redux/orders/ordersThunks';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeleteOrder,
  actionArchiveOrder,
  actionAcceptOrder,
  actionDeclineOrder,
  actionSelectOrderByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
} from 'redux/orders/ordersActions';

import { orderStatus } from 'data/orders';
import { testOrdersArr } from 'data/orders';

const initialState = {
  orders: testOrdersArr,
  isLoading: false,
  lastEditedId: null,
  error: null,
  markedOrders: [],
  selectedOrderId: null,
  searchQuery: '',
  searchParam: '',
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [getAllOrdersThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [...action.payload];
    },
    [getAllOrdersThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllOrdersThunk.pending](state, action) {
      state.isLoading = true;
    },

    [addOrderThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [action.payload, ...state.orders];
    },
    [addOrderThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addOrderThunk.pending](state, action) {
      state.isLoading = true;
    },

    [deleteOrderThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = state.orders.filter(order => order.id !== action.payload.id);
    },
    [deleteOrderThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteOrderThunk.pending](state, action) {
      state.isLoading = true;
    },

    [editOrderThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [editOrderThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editOrderThunk.pending](state, action) {
      state.isLoading = true;
    },

    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
    },
    [actionChangeSearchParam](state, { payload }) {
      state.searchParam = payload.dataTitle;
    },

    [actionSelectOrderByClick](state, { payload }) {
      state.selectedPostId = payload;
    },
    [actionMarkCheckbox](state, action) {},
    [actionUnmarkCheckbox](state, action) {},
    [actionMarkAllCheckboxes](state, action) {
      console.log('marked all checkboxes');
    },

    [actionDeleteOrder](state, action) {
      const order = state.orders.find(order => order._id === action.payload.data._id);
      if (!order) {
        action.payload.onError();
        return;
      }
      state.orders = state.orders.filter(order => order._id !== action.payload.data._id);
      action.payload.onSuccess();
    },
    [actionArchiveOrder](state, action) {
      const order = state.orders.find(order => order._id === action.payload.data._id);
      if (!order) {
        action.payload.onError();
        return;
      }

      order.orderStatus = orderStatus.ARCHIVED;
      action.payload.onSuccess();
    },
    [actionAcceptOrder](state, action) {
      const order = state.orders.find(order => order._id === action.payload.data._id);
      if (!order) {
        action.payload.onError();
        return;
      }

      order.orderStatus = orderStatus.ACCEPTED;
      action.payload.onSuccess();
    },
    [actionDeclineOrder](state, action) {
      const order = state.orders.find(order => order._id === action.payload.data._id);
      if (!order) {
        action.payload.onError();
        return;
      }

      order.orderStatus = orderStatus.REJECTED;
      action.payload.onSuccess();
    },
  },
});

export const ordersReducer = ordersSlice.reducer;
