import { takeLatest, put, call } from 'redux-saga/effects';

import { listDoctor } from '../service';
import {
  LIST_DOCTOR,
  LIST_DOCTOR_PENDING,
  LIST_DOCTOR_SUCCESS,
  LIST_DOCTOR_FAILURE
} from '../actionTypes';

function* sagaListDoctor(action) {
  yield put({ type: LIST_DOCTOR_PENDING })

  try {

    const list = yield call(listDoctor)

    yield put({ type: LIST_DOCTOR_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_DOCTOR_FAILURE })

  }
}

export default function* watchListDoctor() {
  yield takeLatest(LIST_DOCTOR, sagaListDoctor)
}