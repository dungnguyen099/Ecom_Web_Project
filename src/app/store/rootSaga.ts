import { all } from 'redux-saga/effects';
import userSaga from './home-saga';

export default function* rootSaga() {
  yield all([userSaga()]);
}
