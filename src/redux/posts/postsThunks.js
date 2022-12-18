import { createAsyncThunk } from '@reduxjs/toolkit';

import localHostApi from '../../services/localHostApi';
// import { token } from '../../services/localHostApi';

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.get(`/product/getAll`);
    console.log(response.data);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAddPost = createAsyncThunk('posts/fetchAddPost', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.post(`/product/create`, obj.submitData);

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError();

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchDeletePost = createAsyncThunk('posts/fetchDeletePost', async (postID, thunkAPI) => {
  try {
    const response = await localHostApi.delete(`/product/${postID}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEditPost = createAsyncThunk('posts/fetchEditPost', async (editedPost, thunkAPI) => {
  console.log(editedPost);
  try {
    const response = await localHostApi.patch(`/product/${editedPost.id}`, editedPost.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchAddPostImgs = createAsyncThunk('posts/fetchAddPost', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.post(`/files/upload`, obj.submitData, { headers: { 'Content-Type': 'multipart/form-data' } });

    obj.onSuccess();

    return response.data;
  } catch (error) {
    console.log(error);

    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
