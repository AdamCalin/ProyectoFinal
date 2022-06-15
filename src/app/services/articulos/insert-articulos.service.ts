import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class InsertArticulosService {

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


  insertar(body:any):Observable<any>{
    let headers = this.headers();

    return this.http.post(`${this.url}/articulos`, body, {headers});
  }
}
