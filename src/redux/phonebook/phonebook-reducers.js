import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
   fetchContactRequest,
   fetchContactSuccess,
   fetchContactError,
   addContactRequest,
   addContactSuccess,
   addContactError,
   deleteContactRequest,
   deleteContactSuccess,
   deleteContactError,
   changeFilter,
   clearError
} from './phonebook-actions';

const initialState = {
   contacts: [],
   filter: '',
   loading: false,
   error: null,
};

const contacts = createReducer(initialState.contacts, {
   [fetchContactSuccess]: (_, { payload }) => payload,
   [addContactSuccess]: (state, { payload }) => [...state, payload],
   [deleteContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
});

const loading = createReducer(initialState.loading, {
   [fetchContactRequest]: () => true,
   [fetchContactSuccess]: () => false,
   [fetchContactError]: () => false,
   [addContactRequest]: () => true,
   [addContactSuccess]: () => false,
   [addContactError]: () => false,
   [deleteContactRequest]: () => true,
   [deleteContactSuccess]: () => false,
   [deleteContactError]: () => false,
});

const filter = createReducer(initialState.filter, {
   [changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
   [fetchContactError]: setError,
   [addContactError]: setError,
   [deleteContactError]: setError,
   [clearError]: () => null,
});

export default combineReducers({
   contacts,
   filter,
   loading,
   error
});