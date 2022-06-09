import { createAction, props} from '@ngrx/store';
import { IDatosUser} from '../interfaces/datos-usuario.interface';

export const setForm = createAction(
    '[EditForm] setForm',
    props<{ data: IDatosUser}>()
);.36
export const unSetForm = createAction('[EditForm] unSetForm');

export const setIdPerfil = createAction(
    '[EditForm] setIdPerfil',
     props<{ perfil: string }>()
);

export const unsetIdPerfil = createAction('[EditForm] unsetIdPerfil');
