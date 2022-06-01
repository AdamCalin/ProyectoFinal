import { Action, createReducer, on } from '@ngrx/store';
import { setUser, unSetUser, setDatosUser, unsetDatosUser } from './login.actions';
import { IToken } from '../interfaces/token.interface';


export interface State {
    token: IToken;
}

export const initialState: State = {
    token: {token: "", expiracion: new Date(), id_usuario: 0}
}

const _loginReducer = createReducer(initialState,
      
    on( setUser, (state, {token}) => ({...state, token:{ ...token}})),
    on( setDatosUser, (state, {datosUser}) => ({...state, datosUser:{...datosUser}})),
    on( unSetUser, state => ({...state, token:{token: "", expiracion: new Date(), id_usuario: 0}})),
    on( unsetDatosUser, state => ({...state, datosUser:null})),

);


export function loginReducer(state: State | undefined, action: Action){
    return _loginReducer(state, action);
}