import { createAction, props} from '@ngrx/store';

export const setUser = createAction(
    '[Auth] setUser',
    props<{ token: any}>()
);
export const unSetUser = createAction('[Auth] unSetUser');


export const setDatosUser = createAction(
    '[Auth] setDatosUser',
    props<{ datosUser: any}>()    
);

export const unsetDatosUser = createAction('[Auth] unsetDatosUser')