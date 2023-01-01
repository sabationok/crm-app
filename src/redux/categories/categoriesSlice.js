import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllCategories,
  fetchCategoriesByParentId,
  fetchAddCategory,
  fetchDeleteCategory,
  fetchEditCategory,
} from 'redux/categories/categoriesThunks';
const initialState = {
  isLoading: false,
  error: null,
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchAllCategories.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.categories = action.payload.data;
    },
    [fetchAllCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchAllCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchCategoriesByParentId.fulfilled]: (state, action) => {},
    [fetchCategoriesByParentId.pending]: (state, action) => {},
    [fetchCategoriesByParentId.rejected]: (state, action) => {},

    [fetchAddCategory.fulfilled]: (state, action) => {
      state.isloading = false;
      state.categories.push(action.payload.data);
    },
    [fetchAddCategory.pending]: (state, action) => {
      state.isloading = true;
    },
    [fetchAddCategory.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },

    [fetchDeleteCategory.fulfilled]: (state, action) => {},
    [fetchDeleteCategory.pending]: (state, action) => {},
    [fetchDeleteCategory.rejected]: (state, action) => {},

    [fetchEditCategory.fulfilled]: (state, action) => {},
    [fetchEditCategory.pending]: (state, action) => {},
    [fetchEditCategory.rejected]: (state, action) => {},
  },
});

export const categoriesReducer = categoriesSlice.reducer;
