import { combineReducers } from '@reduxjs/toolkit';
// Import your slice reducers here
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
