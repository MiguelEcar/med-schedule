import { takeLatest, put, call } from 'redux-saga/effects';

import { listAppoint } from '../service';
import {
  LIST_APPOINT,
  LIST_APPOINT_PENDING,
  LIST_APPOINT_SUCCESS,
  LIST_APPOINT_FAILURE
} from '../actionTypes';

function* sagaListAppoint(action) {
  yield put({ type: LIST_APPOINT_PENDING })

  try {

    const list = yield call(listAppoint)

    yield put({ type: LIST_APPOINT_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_APPOINT_FAILURE })

  }
}

export default function* watchListAppoint() {
  yield takeLatest(LIST_APPOINT, sagaListAppoint)
}