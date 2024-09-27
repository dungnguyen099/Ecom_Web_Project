// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
// Add your reducers here, example:

const rootReducer = combineReducers({
  counter: counterReducer,
  // add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
