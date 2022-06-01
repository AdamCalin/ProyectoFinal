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

  anadirArticulos(body: any): Observable<any>{
    return this.http.post(`${this.url}/articulos`, body, {observe: 'response'});
  }

}
