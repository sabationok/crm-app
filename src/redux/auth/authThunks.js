import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from 'services/baseApi';
import { token } from 'services/baseApi';

export const userRegister = createAsyncThunk('auth/register', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUp`, obj.submitData);
    console.log(obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userRegisterByAdmin = createAsyncThunk('auth/registerByAdmin', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUpByAdmin`, obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userLogIn = createAsyncThunk('auth/login', async (obj, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signIn`, obj.submitData);

    obj.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userLogOut = createAsyncThunk('auth/logout', async (obj, thunkAPI) => {
  token.unset();

  try {
    // await baseApi.post(`/auth/signOut`);

    obj?.onSuccess();
  } catch (error) {
    obj?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userCurrent = createAsyncThunk('auth/getCurrentUser', async (obj, thunkAPI) => {
  const state = thunkAPI.getState();

  token.set(state.auth.token);

  try {
    const { data } = await baseApi.get(`/auth/getCurrentUser`);

    obj?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    obj?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
