import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const fetchAllOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
  try {
    const response = await baseApi.get(`/orders`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAddOrder = createAsyncThunk('orders/fetchAddOrder', async (newOrder, thunkAPI) => {
  try {
    const response = await baseApi.post(`/orders`, newOrder);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchDeleteOrder = createAsyncThunk('orders/fetchDeleteOrder', async (orderID, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/orders/${orderID}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchEditOrder = createAsyncThunk('orders/fetchEditOrder', async (editedOrder, thunkAPI) => {
  console.log(editedOrder);
  try {
    const response = await baseApi.put(`/orders/${editedOrder.id}`, editedOrder.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
