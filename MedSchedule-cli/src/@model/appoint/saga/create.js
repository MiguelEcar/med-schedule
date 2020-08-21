import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createAppoint } from '../service';
import {
  CREATE_APPOINT,
  CREATE_APPOINT_PENDING,
  CREATE_APPOINT_SUCCESS,
  CREATE_APPOINT_FAILURE
} from '../actionTypes';


function* sagaCreateAppoint(action) {
  yield put({ type: CREATE_APPOINT_PENDING })

  try {

    const newOid = yield call(createAppoint, action.data);

    yield put({ type: CREATE_APPOINT_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_APPOINT_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateAppoint() {
  yield takeLatest(CREATE_APPOINT, sagaCreateAppoint)
}
