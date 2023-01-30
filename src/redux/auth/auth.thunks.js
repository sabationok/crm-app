import { createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from 'services/baseApi';
import { token } from 'services/baseApi';

export const registerUserThunk = createAsyncThunk('auth/registerUserThunk', async (payload, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUp`, payload.submitData);

    payload?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerUserByAdminThunk = createAsyncThunk('auth/registerUserByAdminThunk', async (payload, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signUpByAdmin`, payload.submitData);

    payload?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logInUserThunk = createAsyncThunk('auth/logInUserThunk', async (payload, thunkAPI) => {
  try {
    const { data } = await baseApi.post(`/auth/signIn`, payload.submitData);

    payload?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOutUserThunk = createAsyncThunk('auth/logOutUserThunk', async (payload, thunkAPI) => {
  const state = thunkAPI.getState();

  token.set(state.auth.token);

  try {
    await baseApi.post(`/auth/signOut`);

    payload?.onSuccess();

    token.unset();
  } catch (error) {
    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUserThunk = createAsyncThunk('auth/getCurrentUserThunk', async (payload, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.token);

  try {
    const { data } = await baseApi.get(`/auth/getCurrentUser`);

    payload?.onSuccess(data.data);

    return data.data;
  } catch (error) {
    payload?.onError(error);

    return thunkAPI.rejectWithValue(error.message);
  }
});
