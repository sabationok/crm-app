import { createAsyncThunk } from '@reduxjs/toolkit';

import baseApi from '../../services/baseApi';
// import { token } from '../../services/baseApi';

export const getAllPostsThunk = createAsyncThunk('posts/getAllPostsThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.get(`/product/getAll`);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPostThunk = createAsyncThunk('posts/addPostThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.post(`/product/create`, obj.submitData);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deletePostThunk = createAsyncThunk('posts/deletePostThunk', async (postID, thunkAPI) => {
  try {
    const response = await baseApi.delete(`/product/${postID}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editPostThunk = createAsyncThunk('posts/editPostThunk', async (editedPost, thunkAPI) => {
  console.log(editedPost);
  try {
    const response = await baseApi.patch(`/product/${editedPost.id}`, editedPost.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addPostImgsThunk = createAsyncThunk('posts/addPostImgsThunk', async (obj, thunkAPI) => {
  try {
    const response = await baseApi.post(`/files/upload`, obj.submitData, { headers: { 'Content-Type': 'multipart/form-data' } });

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
