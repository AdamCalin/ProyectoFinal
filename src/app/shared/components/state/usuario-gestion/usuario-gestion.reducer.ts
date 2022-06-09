import { Action, createReducer, on } from '@ngrx/store';
import { setForm, unSetForm, setIdPerfil, unsetIdPerfil } from './usuario-gestion.action';
import { IDatosUser } from '../interfaces/datos-usuario.interface';


export interface State {
    data: IDatosUser,
    perfil: any
}

export const initialState: State = {
    data: {iD_USUARIO: 0,
        usuario: "",
        email: "",
        iD_PERFIL: 0,},
    perfil: {perfil: ""}
}

const _editFormReducer = createReducer(initialState,
      
    on( setForm, (state, {data}) => ({...state, data:{ ...data}})),
    on( setIdPerfil, (state, {perfil}) =>  ({...state, perfil: perfil })),
    on( unSetForm, state => ({...state, data:{
        iD_USUARIO: 0,
        usuario: "",
        email: "",
        iD_PERFIL: 0,}})),
    on( unsetIdPerfil, state => ({...state, perfil:{perfil: "",}})),
);


export function editFormReducer(state: State | undefined, action: Action){
    return _editFormReducer(state, action);
}