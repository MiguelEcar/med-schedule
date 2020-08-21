


import watchNewCustomer from './saga/new';
import watchCreateCustomer from './saga/create';
import watchListCustomer from './saga/list';

export const customerSaga = [
    watchNewCustomer(),
    watchCreateCustomer(),
    watchListCustomer(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';
export * from './entity';
