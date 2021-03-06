import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

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

  crearPedido(body:any){
    let headers = this.headers();
    return this.http.post(`${this.url}/pedidos`, body);
  }

  getPedidos(usuario:any){
    let headers = this.headers();
    return this.http.get(`${this.url}/pedidos?usuario=${usuario}`, {headers})
  }

  borrarPedido(id:any){
    let headers = this.headers();
    return this.http.delete(`${this.url}/pedidos?id_pedido=${id}`, {headers})
  }

  getPedidoCodigo(codigo:any){
    let headers = this.headers();
    return this.http.get(`${this.url}/codigo?codigo=${codigo}`, {headers});
  }


}
