import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './slices/sliceFilter';
import { userReducer } from './slices/authSlice';
import { postsReducer } from './posts/slicePosts';
import { ordersReducer } from './orders/ordersSlice';
// import { postsBlockReducer } from './slices/slicePostsBlock';
import { appSettingsReducer } from './appSettings/appSettingsSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistUserConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const persistAppSettingsConfig = {
  key: 'appSettings',
  storage,
  whitelist: ['isDarkTheme'],
};
const persistedAppSettingsReducer = persistReducer(persistAppSettingsConfig, appSettingsReducer);

const rootReducer = combineReducers({
  // postsBlock: postsBlockReducer,
  posts: postsReducer,
  orders: ordersReducer,
  filter: filterReducer,
  auth: persistedUserReducer,

  appSettings: persistedAppSettingsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
