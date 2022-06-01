import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../shared/components/state/login/login.actions';
import Swal from 'sweetalert2';
import { AppState } from '../../app.reducer';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  dataLogin: any = null;

  url:string = "http://localhost:7187/api";

  constructor(private http: HttpClient, private store:Store<AppState>) {
    this.store.select('login').subscribe(state => {
      this.dataLogin = state.token; 
    });
   }

   headers() {
     return new HttpHeaders({
      'Authorization': `Bearer ${this.dataLogin.token}`
     })
  }


    
  login(body:any){
    return this.http.post(`${this.url}/cuentas/login`, body, {observe:'response'}).subscribe( (res:any) => {
        if(res.status == 200){
        this.store.dispatch( LoginActions.setUser( {token : res.body.result}));
        this.usuario(res.body.result.id_usuario);
        Swal.fire({
            width: 200,
            position: 'bottom-end',
            icon: 'success',
            title: 'Sesion iniciada correctamente',
            showConfirmButton: false,
            timer: 1500
            })
        }
        else{
            this.store.dispatch( LoginActions.unSetUser());
            Swal.fire({
                width: 200,
                position: 'bottom-end',
                icon: 'error',
                title: 'Error. Credenciales incorrectos',
                showConfirmButton: false,
                timer: 1500
              });
            
        }
    })
  }

  usuario(id_usuario : any){
    let headers = this.headers();
    console.log(headers);
    
    return this.http.get(`${this.url}/usuarios/${id_usuario}`, {headers}).subscribe((res:any) =>{
      // console.log(res);
      this.store.dispatch( LoginActions.setDatosUser({ datosUser: res}))
    });
  }

}
