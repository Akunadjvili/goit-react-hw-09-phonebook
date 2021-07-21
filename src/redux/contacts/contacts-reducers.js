import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { contactsActions } from 'redux/contacts';

const itemsInitial = [];
const items = createReducer(itemsInitial, {
  [contactsActions.fetchListOfContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactsActions.setContactsFilter]: (_, { payload }) => payload,
});

const notify = createReducer('', {
  [contactsActions.showNotify]: (state, { payload: message }) => {
    // let rez;
    // if (state.visible) {
    //   rez = { ...state };
    // } else {
    //   rez = { visible: true, message };
    // }
    return { visible: true, message };
  },
  [contactsActions.hideNotify]: (state, _) => {
    return { ...state, visible: false };
  },
});

const loading = createReducer(false, {
  [contactsActions.fetchListOfContactsRequest]: () => true,
  [contactsActions.fetchListOfContactsSuccess]: () => false,
  [contactsActions.fetchListOfContactsError]: () => false,

  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,

  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

const lastError = createReducer(null, {
  [contactsActions.fetchListOfContactsError]: (_, { payload }) => payload,
  [contactsActions.addContactError]: (_, { payload }) => payload,
  [contactsActions.deleteContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
  notify,
  loading,
  lastError,
});

export default contactsReducer;
