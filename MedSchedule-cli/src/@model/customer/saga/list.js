import { takeLatest, put, call } from 'redux-saga/effects';

import { listCustomer } from '../service';
import {
  LIST_CUSTOMER,
  LIST_CUSTOMER_PENDING,
  LIST_CUSTOMER_SUCCESS,
  LIST_CUSTOMER_FAILURE
} from '../actionTypes';

function* sagaListCustomer(action) {
  yield put({ type: LIST_CUSTOMER_PENDING })

  try {

    const list = yield call(listCustomer)

    yield put({ type: LIST_CUSTOMER_SUCCESS, list: list })

  } catch (error) {

    yield put({ type: LIST_CUSTOMER_FAILURE })

  }
}

export default function* watchListCustomer() {
  yield takeLatest(LIST_CUSTOMER, sagaListCustomer)
}