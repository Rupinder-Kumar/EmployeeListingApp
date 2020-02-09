import * as ActionTypes from "./DashboardActionTypes";

const initialState = {
    data: [],    
    loading: false,
    loaded: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    
    case ActionTypes.LOAD_EMPLOYEES:
        return { ...state, data: payload }
    
    case ActionTypes.LOAD_EMPLOYEES_SUCCESS:
        return { ...state, loaded: true }

    case ActionTypes.LOAD_EMPLOYEES_FAILURE:
            return { ...state, error: payload }
    
    case ActionTypes.EMPLOYEES_LOADING:
            return { ...state, loading: payload }

    default:
        return state;
    }   

}