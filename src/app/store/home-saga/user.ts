import { call, put } from 'redux-saga/effects';
import { fetchUserFailure, fetchUserSuccess } from '../reducers/user';

interface UserData {
  name: string;
}

// Mock async function to fetch data
function fetchUserData(): Promise<UserData> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'John Doe' }), 1000);
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* fetchUserSaga(): Generator<any, void, UserData> {
  try {
    const data = yield call(fetchUserData);
    yield put(fetchUserSuccess(data));
  } catch (error) {
    console.log('errr', error);
    yield put(fetchUserFailure());
  }
}

export default fetchUserSaga;
