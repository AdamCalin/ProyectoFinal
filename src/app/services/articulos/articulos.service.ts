import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url:string = "http://localhost:7187/api";

  constructor(private http: HttpClient) {

   }

   headers() {
     return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
     })
  }
   getArticulos(): Observable<any>{
    return this.http.get(`${this.url}/articulos`); 
  }

  login(body:any):Observable<any>{
    return this.http.post(`${this.url}/cuentas/login`, body, {observe:'response'});
  }

  usuario(id_usuario : any):Observable<any>{
    let headers = this.headers();
    
    return this.http.get(`${this.url}/usuarios/${id_usuario}`, {headers});
  }

}
