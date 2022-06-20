import { ActionReducerMap, ActionReducer, MetaReducer, Action  } from '@ngrx/store';
import * as UI from './shared/components/state/ui.reducer';
import * as login from '../app/shared/components/state/login/login.reducer';
import * as data from '../app/shared/components/state/usuario-gestion/usuario-gestion.reducer';
import * as carrito from '../app/shared/components/state/carrito/carrito.reducer';

import { localStorageSync, LocalStorageConfig } from "ngrx-store-localstorage";


export interface AppState {
   ui: UI.State,
   login: login.State,
   data: data.State,
   carrito: carrito.State
}


export const appReducers: ActionReducerMap<AppState> = {
    ui: UI.uiReducer,
    login: login.loginReducer,
    data: data.editFormReducer,
    carrito: carrito.carritoReducer,
}

export function persitsData(reducer: ActionReducer<any>): ActionReducer<any> {
    const config: LocalStorageConfig = {
      keys: [
          {'ui': {}},
          {'login': {}},
          {'carrito': {}}
      ],
      rehydrate: true,
      removeOnUndefined: true,
      storage: sessionStorage
    };
    return localStorageSync(config)(reducer);
  }
  export const metaReducers: MetaReducer<any, Action>[] = [persitsData];
