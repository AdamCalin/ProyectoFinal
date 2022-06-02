import { createAction, props} from '@ngrx/store';
import { IDatosUser, IToken } from '../interfaces/datos-usuario.interface';

export const setUser = createAction(
    '[Auth] setUser',
    props<{ token: IToken}>()
);
export const unSetUser = createAction('[Auth] unSetUser');


export const setDatosUser = createAction(
    '[Auth] setDatosUser',
    props<{ datosUser: IDatosUser}>()    
);

export const unsetDatosUser = createAction('[Auth] unsetDatosUser')