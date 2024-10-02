import { takeLatest } from 'redux-saga/effects';
import { fetchUserRequest } from '../reducers/user';
import fetchUserSaga from './user';

export default function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}
