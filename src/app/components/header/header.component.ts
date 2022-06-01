import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { LoginService } from 'src/app/services/login/login.service';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../shared/components/state/login/login.actions';
import * as UI from '../../shared/components/state/ui.actions';
import { AppState } from 'src/app/app.reducer';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(300, style({opacity: 0}))
      ])
    ])

]
})
export class HeaderComponent implements OnInit {

   showModal: boolean = false;
   fadeOut: boolean = false;
   mostrarBoton: boolean = true;
  datosUsuario:any;


  @Output() datos = new EventEmitter<any>();

  dataLogin:any ;
  constructor(public loginService : LoginService, private store: Store<AppState>) {
    this.store.select('login').subscribe(state => {
      this.dataLogin = state; 
    });
  }

  ngOnInit() {
    this.refresh();    
  }
  setClose($event: any) {
    this.showModal = false;
  }

  login($event : any){
    // console.log($event);
    this.loginService.login($event);
        this.mostrarBoton = false;
        this.showModal = false; 
        this.store.dispatch( UI.stopLoading());
  }
  logout($event: any){
    this.mostrarBoton = true;
    sessionStorage.removeItem('login');
    this.store.dispatch( LoginActions.unSetUser());
    this.store.dispatch( LoginActions.unsetDatosUser());
  }

  refresh(){
    this.dataLogin ? this.mostrarBoton = true : this.mostrarBoton = false;
  }
//arreglar boton inicio sesion
}
