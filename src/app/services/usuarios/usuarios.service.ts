import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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

    

  getUsuarios(){
    let headers = this.headers();
    // console.log(headers);
    return this.http.get(`${this.url}/usuarios`, {headers});
  } 
    getPerfiles(){
        let headers = this.headers();
        return this.http.get(`${this.url}/perfiles`, {headers});
    }
  postUsuarios(body : any){
    let headers = this.headers();
    return this.http.post(`${this.url}/usuarios`, body, {headers});
  }
}
