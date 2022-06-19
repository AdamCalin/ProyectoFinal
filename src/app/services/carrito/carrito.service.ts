import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url:string = "http://localhost:7187/api";

  dataLogin: any = null;

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

  ropaCarrito(color:any, id:any){
    return this.http.get(`${this.url}/ropa?color=${color}&id_articulo=${id}`);
  }

}
