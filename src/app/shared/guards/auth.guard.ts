import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  dataLogin: any = null;

  constructor(private store:Store<AppState>, private router:Router) {
    this.store.select('login').subscribe(state => {
      this.dataLogin = state.token; 
    });
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.dataLogin.token){
        return true;
    }else{
    this.router.navigate(['/home']);
      return false;
    }
  }
  //hacer guards segun usuario logeado
}
