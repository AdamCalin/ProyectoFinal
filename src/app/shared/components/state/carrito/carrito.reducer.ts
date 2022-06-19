import { Action, createReducer, on } from '@ngrx/store';
import { setCarrito, unSetCarrito, setContadorCarrito, unSetContadorCarrito} from './carrito.actions';
import { ICarrito } from '../interfaces/carrito.interface';


export interface State {
    carrito: {},
    contador: any
}

export const initialState: State = {
    carrito: {},
    contador: 0
}

const _carritoReducer = createReducer(initialState,
      
    on( setCarrito, (state, {carrito}) => ({...state, carrito:{...carrito}})),
    on( unSetCarrito, state => ({...state, carrito:{}})),
    on( setContadorCarrito, (state, {contador}) => ({...state, contador:0})),
    on( unSetContadorCarrito, state => ({...state, carrito:{}})),
    

);


export function carritoReducer(state: State | undefined, action: Action){
    return _carritoReducer(state, action);
}