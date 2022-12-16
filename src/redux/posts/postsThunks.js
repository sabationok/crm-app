import { createAsyncThunk } from '@reduxjs/toolkit';

import localHostApi from '../../services/localHostApi';
// import { token } from '../../services/localHostApi';

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async (obj, thunkAPI) => {
  try {
    const response = await localHostApi.get(`/getAll`);
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
    const response = await localHostApi.post(`/create`, obj.submitData);

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
    const response = await localHostApi.delete(`/${postID}`);

    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchEditPost = createAsyncThunk('posts/fetchEditPost', async (editedPost, thunkAPI) => {
  console.log(editedPost);
  try {
    const response = await localHostApi.patch(`/${editedPost.id}`, editedPost.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
