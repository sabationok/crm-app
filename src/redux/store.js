import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './auth/authSlice';
import { postsReducer } from './posts/postsSlice';
import { ordersReducer } from './orders/ordersSlice';
import { appPageReducer } from './page/pageSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { appSettingsReducer } from './appSettings/appSettingsSlice';
import { appNotifyReducer } from './notifications/notificationsSlice';

import { persistStore, persistReducer } from 'redux-persist';
// import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
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
const persistPageSettingsConfig = {
  key: 'appPage',
  storage,
  whitelist: ['pageGrid'],
};
const persistedAppPageReducer = persistReducer(persistPageSettingsConfig, appPageReducer);
const persistAppNotifyConfig = {
  key: 'appNotify',
  storage,
  whitelist: ['notifications'],
};
const persistedAppNotifyReducer = persistReducer(persistAppNotifyConfig, appNotifyReducer);

const rootReducer = combineReducers({
  posts: postsReducer,
  orders: ordersReducer,
  auth: persistedUserReducer,
  appNotify: persistedAppNotifyReducer,
  appSettings: persistedAppSettingsReducer,
  appPage: persistedAppPageReducer,
  categories: categoriesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
