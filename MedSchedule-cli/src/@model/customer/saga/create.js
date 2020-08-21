import { takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createCustomer } from '../service';
import {
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_PENDING,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILURE
} from '../actionTypes';


function* sagaCreateCustomer(action) {
  yield put({ type: CREATE_CUSTOMER_PENDING })

  try {

    const newOid = yield call(createCustomer, action.data);

    yield put({ type: CREATE_CUSTOMER_SUCCESS, oid: newOid });

    toast('Success!', { type: 'success', position: 'top-right' });

  } catch (error) {
    yield put({ type: CREATE_CUSTOMER_FAILURE })

    toast('Error!', { type: 'error', position: 'top-right' });
  }

}

export default function* watchCreateCustomer() {
  yield takeLatest(CREATE_CUSTOMER, sagaCreateCustomer)
}
