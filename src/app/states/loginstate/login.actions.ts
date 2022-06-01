import { createAction, props } from '@ngrx/store';
import { ArticulosService } from '../../services/articulos/articulos.service';

export const loginRequest = createAction(
    '[Auth] Login Request',
    props<{ credentials: {user: string, password: string} }>()
  );
  export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ loginSuccessResponse : ArticulosService }>()
  );
  export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
  );
   