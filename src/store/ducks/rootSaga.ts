import {all, takeLatest} from 'redux-saga/effects';

import {GymsTypes} from './gyms/types';
import {load} from './gyms/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(GymsTypes.LOAD_REQUEST, load)]);
}
