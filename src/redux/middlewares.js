import { getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const thunk =
//   ({ dispatch, getState }) =>
//   next =>
//   action =>
//     typeof action === 'function' ? action(dispatch, getState) : next(action);

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // thunk,
  logger,
];

export default middlewares;
