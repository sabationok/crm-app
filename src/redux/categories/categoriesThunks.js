import { createAsyncThunk } from '@reduxjs/toolkit';

import localHostApi from '../../services/localHostApi';
// import { token } from '../../services/localHostApi';

export const fetchAllCategories = createAsyncThunk('categories/fetchAllCategories', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.get(`/category/getAll`);

    obj?.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    obj?.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchCategoriesByParentId = createAsyncThunk('categories/fetchCategoriesByParentId', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.get(`/category/getByOwnerId/${obj.submitData.id}`);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAddCategory = createAsyncThunk('categories/fetchAddCategory', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.post(`/category/create`, obj.submitData);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    // console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchDeleteCategory = createAsyncThunk('categories/fetchDeleteCategory', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.delete(`/category/${obj.submitData.id}`);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEditCategory = createAsyncThunk('categories/fetchEditCategory', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.patch(`/category/${obj.submitData.id}`, obj.submitData.updateData);

    obj.onSuccess(response.data.data);

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});
