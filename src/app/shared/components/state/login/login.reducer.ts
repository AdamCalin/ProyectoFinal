import { Action, createReducer, on } from '@ngrx/store';
import { setUser, unSetUser, setDatosUser, unsetDatosUser } from './login.actions';
import { IDatosUser, IToken } from '../interfaces/datos-usuario.interface';


export interface State {
    token: IToken;
    datosUser:IDatosUser;
}

export const initialState: State = {
    token: {token: "", expiracion: new Date(), id_usuario: 0},
    datosUser: {  email: "",iD_PERFIL: 0, iD_USUARIO: 0,usuario: ""}
}

const _loginReducer = createReducer(initialState,
      
    on( setUser, (state, {token}) => ({...state, token:{ ...token}})),
    on( setDatosUser, (state, {datosUser}) => ({...state, datosUser:{...datosUser}})),
    on( unSetUser, state => ({...state, token:{token: "", expiracion: new Date(), id_usuario: 0}})),
    on( unsetDatosUser, state => ({...state, datosUser: {  email: "",iD_PERFIL: 0, iD_USUARIO: 0,usuario: ""}})),

);


export function loginReducer(state: State | undefined, action: Action){
    return _loginReducer(state, action);
}