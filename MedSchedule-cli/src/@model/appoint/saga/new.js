import { takeLatest, put } from 'redux-saga/effects';

import {
  appoint,
  NEW_APPOINT,
  NEW_APPOINT_SUCCESS,
} from '@model';

function* sagaNewAppoint(action) {

  yield put({ type: NEW_APPOINT_SUCCESS, oid: appoint.newOid });

}

export default function* watchNewAppoint() {
  yield takeLatest(NEW_APPOINT, sagaNewAppoint)
}
