import { createAction, props} from '@ngrx/store';
import { ICarrito } from '../interfaces/carrito.interface';

export const setCarrito = createAction(
    '[Auth] setCarrito',
    props<{ carrito: any}>()
);
export const unSetCarrito = createAction('[Auth] unSetCarrito');
export const setContadorCarrito = createAction(
    '[Auth] setContadorCarrito',
    props<{ contador: any}>()
);
export const unSetContadorCarrito = createAction('[Auth] unSetContadorCarrito');
