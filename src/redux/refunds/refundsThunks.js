import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const getAllRefundsThunk = createAsyncThunk('refunds/fetchRefunds', async (dataObj, thunkAPI) => {
  try {
    const response = await baseApi.get(`/refunds`);

    dataObj?.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    dataObj?.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});
export const addRefundThunk = createAsyncThunk('refunds/fetchAddRefund', async (dataObj, thunkAPI) => {
  try {
    const response = await baseApi.post(`/refunds`, dataObj?.submitData);
    dataObj?.onSuccess();
    return response.data;
  } catch (error) {
    console.log(error);
    dataObj?.onError();
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteRefundThunk = createAsyncThunk('refunds/fetchDeleteRefund', async (dataObj, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/refunds/${dataObj?.submitData?._id}`);
    dataObj?.onSuccess();
    return response.data;
  } catch (error) {
    console.log(error);
    dataObj?.onError();
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const editRefundThunk = createAsyncThunk('refunds/fetchEditRefund', async (dataObj, thunkAPI) => {
  try {
    const response = await baseApi.put(`/refunds/${dataObj?.submitData?._id}`, dataObj?.submitData);
    dataObj?.onSuccess();
    return response.data;
  } catch (error) {
    console.log(error);
    dataObj?.onError();
    return thunkAPI.rejectWithValue(error.message);
  }
});
