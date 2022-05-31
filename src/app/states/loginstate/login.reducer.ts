import { create } from "domain"
import { loginSuccess, loginFailure } from './login.actions';


export interface State{
    token: string,
    user: string,
    loginError?: string
}

export const initialState : State = {
    token: ' ',
    user: ' '
} 

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, {loginSuccessResponse}) => {
        return {
            ...state,
            token: loginSuccessResponse.token,
            user: loginSuccessResponse.user
        };
    }),
    on(loginFailure, (state, {error}) => {
        return {
            ...state,
            loginError: error,
            token: null,
            user: null
        }
    })
)

export function authReducer(state, action){
    return _authReducer(state, action);
}