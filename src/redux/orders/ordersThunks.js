import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const getAllOrdersThunk = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
  try {
    const response = await baseApi.get(`/orders`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addOrderThunk = createAsyncThunk('orders/addOrderThunk', async (newOrder, thunkAPI) => {
  try {
    const response = await baseApi.post(`/orders`, newOrder);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteOrderThunk = createAsyncThunk('orders/deleteOrderThunk', async (orderID, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/orders/${orderID}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const editOrderThunk = createAsyncThunk('orders/editOrderThunk', async (editedOrder, thunkAPI) => {
  console.log(editedOrder);
  try {
    const response = await baseApi.put(`/orders/${editedOrder.id}`, editedOrder.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
