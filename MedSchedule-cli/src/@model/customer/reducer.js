
import {
    NEW_CUSTOMER_SUCCESS,
    LIST_CUSTOMER_PENDING,
    LIST_CUSTOMER_SUCCESS,
    LIST_CUSTOMER_FAILURE,
    CREATE_CUSTOMER_PENDING,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function customerReducer(state = initialState, action) {

    switch (action.type) {
        case NEW_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case LIST_CUSTOMER_PENDING:
        case CREATE_CUSTOMER_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_CUSTOMER_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case LIST_CUSTOMER_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CREATE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export { customerReducer };