import * as ActionTypes from "./LoginActionTypes";
import Credentials from "../../Models/Credentials.json";

export const setError = (payload) => ({
    type: ActionTypes.SET_USER_ERROR,
    payload
})

export const setIsLoggedIn = (payload) => ({
    type: ActionTypes.SET_IS_LOGGED_IN,
    payload
})

export const loginSuccess = (payload) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload
})

export const logoutUser = (payload) => ({
    type: ActionTypes.LOGOUT,
    payload
})

export const login = payload => {
    const { username, password } = Credentials;
    return dispatch => {
        if (username === payload.email && password === payload.password) {
            dispatch(loginSuccess(payload.email));
            dispatch(setIsLoggedIn(true))
        } else {
            dispatch(setError("Username or Password is incorrect"))
        }
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(logoutUser())
    }
}

