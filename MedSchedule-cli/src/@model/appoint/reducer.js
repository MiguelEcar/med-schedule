
import {
    NEW_APPOINT_SUCCESS,
    LIST_APPOINT_PENDING,
    LIST_APPOINT_SUCCESS,
    LIST_APPOINT_FAILURE,
    CREATE_APPOINT_PENDING,
    CREATE_APPOINT_SUCCESS,
    CREATE_APPOINT_FAILURE,
} from './actionTypes';


const initialState = { list: null, loading: false }


function appointReducer(state = initialState, action) {

    switch (action.type) {
        case NEW_APPOINT_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case LIST_APPOINT_PENDING:
        case CREATE_APPOINT_PENDING:
            return {
                ...state,
                loading: true,
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case LIST_APPOINT_SUCCESS:
            return {
                ...state,
                list: action.list,
                loading: false
            }
        case LIST_APPOINT_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        case CREATE_APPOINT_SUCCESS:
            return {
                ...state,
                loading: false,
                oid: action.oid
            }
        case CREATE_APPOINT_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export { appointReducer };