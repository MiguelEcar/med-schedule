


import watchNewDoctor from './saga/new';
import watchCreateDoctor from './saga/create';
import watchListDoctor from './saga/list';

export const doctorSaga = [
    watchNewDoctor(),
    watchCreateDoctor(),
    watchListDoctor(),
]

export * from './actionTypes';
export * from './reducer';
export * from './service';
export * from './entity';
