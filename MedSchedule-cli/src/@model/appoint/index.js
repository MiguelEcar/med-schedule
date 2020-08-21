


import watchNewAppoint from './saga/new';
import watchCreateAppoint from './saga/create';
import watchListAppoint from './saga/list';

export const appointSaga = [
    watchNewAppoint(),
    watchCreateAppoint(),
    watchListAppoint(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';
export * from './entity';
