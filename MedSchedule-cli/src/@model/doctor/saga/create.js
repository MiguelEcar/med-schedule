import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createDoctor } from '../service';
import {
  CREATE_DOCTOR,
  CREATE_DOCTOR_PENDING,
  CREATE_DOCTOR_SUCCESS,
  CREATE_DOCTOR_FAILURE
} from '../actionTypes';


function* sagaCreateDoctor(action) {
  yield put({ type: CREATE_DOCTOR_PENDING })

  try {

    const newOid = yield call(createDoctor, action.data);

    yield put({ type: CREATE_DOCTOR_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_DOCTOR_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateDoctor() {
  yield takeLatest(CREATE_DOCTOR, sagaCreateDoctor)
}
