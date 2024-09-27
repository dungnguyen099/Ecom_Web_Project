// sagas/counterSaga.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import { increment } from '../reducers/counterReducer';

function* handleIncrement() {
  // Example async task
  yield call(() => new Promise((resolve) => setTimeout(resolve, 1000))); // Simulate delay
  yield put(increment()); // Dispatch increment action
}

export default function* counterSaga() {
  yield takeEvery('counter/incrementAsync', handleIncrement); // Listen for async increment action
}
