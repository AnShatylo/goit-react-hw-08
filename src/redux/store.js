import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from '../redux/contacts/slice';
import { filterReducers } from '../redux/filters/slice';
import { authReducer } from '../redux/auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistedAuthReducer = persistReducer(
  {
    key: 'token',
    storage,
    whitelist: ['token'],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filters: filterReducers,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
