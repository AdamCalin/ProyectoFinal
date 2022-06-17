import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';


@Injectable({
  providedIn: 'root'
})
export class PedidosArticulosService {

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

    
  crearPedidoArticulo(body: any){
    let headers = this.headers();

     return  this.http.post(`${this.url}/pedidos_articulos`, body, {headers});
  }
 
  damePedidosArticulos(){
    let headers = this.headers();
    return this.http.get(`${this.url}/pedidos_articulos`, {headers});
  }
  
  deletePedido(id : any){
    let headers = this.headers();
    return this.http.delete(`${this.url}/pedidos_articulos/${id}`, {headers});
  }
  

}
