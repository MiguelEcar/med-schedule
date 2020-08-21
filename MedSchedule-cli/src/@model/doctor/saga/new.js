import { takeLatest, put } from 'redux-saga/effects';

import {
  doctor,
  NEW_DOCTOR,
  NEW_DOCTOR_SUCCESS,
} from '@model';

function* sagaNewDoctor(action) {

  yield put({ type: NEW_DOCTOR_SUCCESS, oid: doctor.newOid });

}

export default function* watchNewDoctor() {
  yield takeLatest(NEW_DOCTOR, sagaNewDoctor)
}
