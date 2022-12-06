import userApi from '../../services/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/userApi';

export const userRegister = createAsyncThunk('auth/register', async (newUser, thunkAPI) => {
  try {
    const response = await userApi.post(`/users/signup`, newUser);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const userLogIn = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await userApi.post(`/users/login`, user);
    token.set(response.data.token);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userLogOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await userApi.post(`/users/logout`);
    token.unset();
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userCurrent = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  token.set(state.auth.token);
  try {
    const { data } = await userApi.get(`/users/current`);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
