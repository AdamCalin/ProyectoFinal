import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertArticulosService {

  url:string = "http://localhost:7187/api";

  constructor(private http: HttpClient) {

   }

  insertar(body:any):Observable<any>{
    return this.http.post(`${this.url}/articulos`, body);
  }
}
