import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { IRopa } from 'src/app/interfaces/ropa.interface';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner/spinner.service';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  dataLogin: any = null;

  url:string = "http://localhost:7187/api";


  constructor(private http: HttpClient, private store:Store<AppState>, private spinner: SpinnerService) {
    this.store.select('login').subscribe(state => {
      this.dataLogin = state.token; 
    });
   }

   headers() {
     return new HttpHeaders({
      'Authorization': `Bearer ${this.dataLogin.token}`
     })
  }

  getVistaTienda(){

    let headers = this.headers();
    return this.http.get(`${this.url}/tienda`, {headers});
  }

  getRopa(id:any): Observable<any>{
      return this.http.get(`${this.url}/ropa/${id}`);
  }

  getVistaTiendaSelect(color:any, id:any){

    return this.http.get(`${this.url}/tienda/select?color=${color}&id_articulo=${id}`);
  }

}
