import * as ActionTypes from "./DashboardActionTypes";
import Employees from "../../Models/Employees.json";

export const setError = (payload) => ({
    type: ActionTypes.LOAD_EMPLOYEES_FAILURE,
    payload
})

export const setLoading = (payload) => ({
    type: ActionTypes.EMPLOYEES_LOADING,
    payload
})

export const setSuccess = () => ({
    type: ActionTypes.LOAD_EMPLOYEES_SUCCESS
})

export const loadEmployees = (payload) => ({
    type: ActionTypes.LOAD_EMPLOYEES,
    payload
})

export const getEmployees = () => {
    return dispatch => {
        dispatch(setLoading(true));
        if(Employees.length > 0 ) {
            dispatch(loadEmployees(Employees))
            dispatch(setSuccess())
            dispatch(setLoading(false));
        } else {
            dispatch(setLoading(false));
            dispatch(setError("No Employees Available"))
        }
    }
 }