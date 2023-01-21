import { createSlice } from '@reduxjs/toolkit';
// import { getAllPostsThunk, addPostThunk, deletePostThunk, editPostThunk, addPostImgsThunk } from 'redux/posts/postsThunks';
import { getAllPostsThunk, addPostThunk, deletePostThunk, editPostThunk, addPostImgsThunk } from './postsThunks';

import {
  actionChangeSearchQuery,
  actionMarkCheckbox,
  actionUnmarkCheckbox,
  actionDeletePost,
  actionSelectPostByClick,
  actionMarkAllCheckboxes,
  actionChangeSearchParam,
  actionUnMarkAllCheckboxes,
  actionArchivePost,
  actionTogglePostVisibility,
  actionApprovePost,
  actionRejectPost,
} from 'redux/posts/postsActions';

import { productsArrTest } from 'data/products';
import { postStatus } from 'data/products';

const { ARCHIVED, REJECTED, APPROVED } = postStatus;

const initialState = {
  posts: productsArrTest,
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
    [getAllPostsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [...action.payload];
    },
    [getAllPostsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllPostsThunk.pending](state, action) {
      state.isLoading = true;
    },

    [addPostThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = [action.payload, ...state.posts];
    },
    [addPostThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addPostThunk.pending](state, action) {
      state.isLoading = true;
    },

    [deletePostThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.posts = state.posts.filter(user => user.id !== action.payload.id);
    },
    [deletePostThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deletePostThunk.pending](state, action) {
      state.isLoading = true;
    },

    [editPostThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.lastEditedId = action.payload.id;
    },
    [editPostThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [editPostThunk.pending](state, action) {
      state.isLoading = true;
    },

    [addPostImgsThunk.fulfilled](state, action) {
      state.isLoading = false;
      // state.posts = [action.payload, ...state.posts];
      console.log(action.payload);
    },
    [addPostImgsThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addPostImgsThunk.pending](state, action) {
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
    [actionTogglePostVisibility](state, action) {
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

      post.approvedStatus = APPROVED;
      action.payload.onSuccess();
    },
    [actionRejectPost](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);

      if (!post) {
        action.payload.onError();
        return;
      }

      post.approvedStatus = REJECTED;
      action.payload.onSuccess();
    },
    [actionArchivePost](state, action) {
      const post = state.posts.find(post => post._id === action.payload.data._id);

      if (!post) {
        action.payload.onError();
        return;
      }

      post.approvedStatus = ARCHIVED;
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
