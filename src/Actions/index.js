import * as types from './ActionTypes';

export function Login() {
    return {
        type: types.LOGIN
    };
}

export function Logout() {
    return {
        type: types.LOGOUT
    };
}

export function SetLogged() {
    return {
        type: types.SET_LOGGED
    };
}