import { all } from 'redux-saga/effects';

import { loginSaga, loginReducer } from './login';
import { userSaga, userReducer } from './user';
import { langSaga, langReducer } from './lang';
import { doctorSaga, doctorReducer } from './doctor';
import { customerSaga, customerReducer } from './customer';
import { appointSaga, appointReducer } from './appoint';


export default function* rootSaga() {
  yield all([
    ...loginSaga,
    ...userSaga,
    ...langSaga,
    ...doctorSaga,
    ...customerSaga,
    ...appointSaga,
  ])
}

export const rootReducer = {
  loginReducer,
  userReducer,
  langReducer,
  doctorReducer,
  customerReducer,
  appointReducer,
}

export * from './login';
export * from './user';
export * from './lang';
export * from './doctor';
export * from './customer';
export * from './appoint';
