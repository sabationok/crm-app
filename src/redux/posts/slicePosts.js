import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPosts, fetchAddPost, fetchDeletePost, fetchEditPost, fetchAddPostImgs } from 'redux/posts/postsThunks';
import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeletePost,
  actionSelectPostByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
  actionUnMarkAllCheckboxes,
  actionChangePostVisibility,
  actionApprovePost,
  actionRejectPost,
} from 'redux/posts/postsActions';

import { productsArrTest } from 'data/productsFormData';

const initialState = {
  posts: [...productsArrTest],
  isLoading: false,
  lastEditedId: null,
  error: null,
  markedPosts: [],
  selectedPostId: '',
  searchQuery: '',
  searchParam: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchAllPosts.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [...action.payload];
    },
    [fetchAllPosts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAllPosts.pending](state, action) {
      state.isLoading = true;
    },

    [fetchAddPost.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [action.payload, ...state.posts];
    },
    [fetchAddPost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddPost.pending](state, action) {
      state.isLoading = true;
    },

    [fetchAddPostImgs.fulfilled](state, action) {
      state.isLoading = false;
      // state.posts = [action.payload, ...state.posts];
      console.log(action.payload);
    },
    [fetchAddPostImgs.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchAddPostImgs.pending](state, action) {
      state.isLoading = true;
    },

    [fetchDeletePost.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = state.posts.filter(user => user.id !== action.payload.id);
    },
    [fetchDeletePost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchDeletePost.pending](state, action) {
      state.isLoading = true;
    },

    [fetchEditPost.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [fetchEditPost.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [fetchEditPost.pending](state, action) {
      state.isLoading = true;
    },

    [actionChangeSearchQuery](state, { payload }) {
      state.searchQuery = payload;
    },
    [actionChangeSearchParam](state, { payload }) {
      state.searchParam = payload.dataTitle;
    },
    [actionSelectPostByClick](state, { payload }) {
      state.selectedPostId = payload;
    },
    [actionMarkAllCheckboxes](state, action) {
      console.log('marked all checkboxes');
    },
    [actionUnMarkAllCheckboxes](state, action) {
      console.log('unmarked all checkboxes');
    },
    [actionMarkCheckbox](state, action) {},
    [actionUnmarkCheckbox](state, action) {},
    [actionChangePostVisibility](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);

      if (!post) {
        action.payload.onError();
        return;
      }

      post.visibilityStatus = !post.visibilityStatus;
      action.payload.onSuccess();
    },
    [actionApprovePost](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);

      if (!post) {
        action.payload.onError();
        return;
      }

      post.approvedStatus = 'success';
      action.payload.onSuccess();
    },
    [actionRejectPost](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);

      if (!post) {
        action.payload.onError();
        return;
      }

      post.approvedStatus = 'rejected';
      action.payload.onSuccess();
    },
    [actionDeletePost](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);
      if (!post) {
        action.payload.onError();
        return;
      }
      state.posts = state.posts.filter(post => post._id !== action.payload.data._id);
      action.payload.onSuccess();
    },
  },
});

export const postsReducer = postsSlice.reducer;
