import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import appSlice from './application/appReducer';

const rootReducer = combineReducers({
  app: appSlice,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
