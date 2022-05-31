import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as LoginActions from '../../../states/loginstate/login.actions';
import { loginRequest, loginFailure } from './login.actions';
import { ArticulosService } from '../../services/articulos/articulos.service';

@Injectable()
export class LoginEffects {

    constructor(private articulosService: ArticulosService){

    }

    loginRequest = createEffect(() => 
    this.actions$.pipe(
        ofType(LoginActions.loginRequest),
        exhaustMap(action) => 
            this.articulosService.login(action.credentials.user, action.credentials.pass).pipe(
                    map((loginSuccessResponse) => 
                        LoginActions.loginSuccess({ loginSuccessResponse })
                        ),
                    catchError((error) => of(LoginActions.loginFailure({ error })))
                )

        )
    );
}