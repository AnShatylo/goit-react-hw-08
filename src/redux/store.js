import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from '../redux/contacts/slice';
import { filterReducers } from '../redux/filters/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filters: filterReducers,
  },
});
