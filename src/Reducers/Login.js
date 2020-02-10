import * as types from '../Actions/ActionTypes';

const initialState = {
    token: ""
};

export default function counter(state = initialState, action) {

    switch(action.type) {
        case types.LOGIN:
            return { ...state, token: state.token };
        case types.LOGOUT:
            return { ...state, token: state.token };
        default:
            return state;
    }
}