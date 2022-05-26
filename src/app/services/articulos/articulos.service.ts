import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url:string = "http://localhost:7187/api";

  constructor(private http: HttpClient) {

   }

  
   getArticulos(): Observable<any>{
    return this.http.get(`${this.url}/articulos`); 
  }

  login(body:any):Observable<any>{
    return this.http.post(`${this.url}/cuentas/login`, body, {observe:'response'});
  }

  // usuario():Observable<any>{
  //   retun this.http.get(`${this.url}/usuarioLogin`);
  // }
}
