import { takeLatest, put } from 'redux-saga/effects';

import {
  customer,
  NEW_CUSTOMER,
  NEW_CUSTOMER_SUCCESS,
} from '@model';

function* sagaNewCustomer(action) {

  yield put({ type: NEW_CUSTOMER_SUCCESS, oid: customer.newOid });

}

export default function* watchNewCustomer() {
  yield takeLatest(NEW_CUSTOMER, sagaNewCustomer)
}
