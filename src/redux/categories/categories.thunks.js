import { createAsyncThunk } from '@reduxjs/toolkit';

import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const getAllCategoriesThunk = createAsyncThunk('categories/getAllCategoriesThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.get(`/category/getAll`);

    payload?.onSuccess(response);

    return response.data;
  } catch (error) {
    // console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCategoriesByParentIdThunk = createAsyncThunk('categories/getCategoriesByParentIdThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.get(`/category/getByOwnerId/${payload.submitData.id}`);

    payload?.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addCategoryThunk = createAsyncThunk('categories/addCategoryThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.post(`/category/create`, payload.submitData);
    console.log(response.data);

    payload?.onSuccess(response);

    return response.data;
  } catch (error) {
    // console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteCategoryThunk = createAsyncThunk('categories/deleteCategoryThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/category/${payload.submitData.id}`);

    payload?.onSuccess(response);

    return response.data;
  } catch (error) {
    console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editCategoryThunk = createAsyncThunk('categories/editCategoryThunk', async (payload, thunkAPI) => {
  try {
    const response = await baseApi.patch(`/category/${payload.submitData.id}`, payload.submitData.updateData);

    payload?.onSuccess(response.data.data);

    return response.data;
  } catch (error) {
    console.log(error);

    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
