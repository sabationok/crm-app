import { createSlice } from '@reduxjs/toolkit';
import { fetchAllOrders, fetchAddOrder, fetchDeleteOrder, fetchEditOrder } from 'redux/orders/ordersThunks';
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
import { nanoid } from 'nanoid';
const newData = testOrdersArr.map(el => {
  return { ...el, _id: nanoid(8) };
});
const initialState = {
  orders: newData,
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
    [fetchAllOrders.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [...action.payload];
    },
    [fetchAllOrders.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllOrders.pending](state, action) {
      state.isLoading = true;
    },

    [fetchAddOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = [action.payload, ...state.orders];
    },
    [fetchAddOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddOrder.pending](state, action) {
      state.isLoading = true;
    },

    [fetchDeleteOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.orders = state.orders.filter(order => order.id !== action.payload.id);
    },
    [fetchDeleteOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDeleteOrder.pending](state, action) {
      state.isLoading = true;
    },

    [fetchEditOrder.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [fetchEditOrder.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchEditOrder.pending](state, action) {
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
