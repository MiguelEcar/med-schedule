
import {
    NEW_DOCTOR_SUCCESS,
    LIST_DOCTOR_PENDING,
    LIST_DOCTOR_SUCCESS,
    LIST_DOCTOR_FAILURE,
    CREATE_DOCTOR_PENDING,
    CREATE_DOCTOR_SUCCESS,
    CREATE_DOCTOR_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function doctorReducer(state = initialState, action) {

    switch (action.type) {
        case NEW_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case LIST_DOCTOR_PENDING:
        case CREATE_DOCTOR_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_DOCTOR_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case LIST_DOCTOR_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case CREATE_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CREATE_DOCTOR_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export { doctorReducer };