import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { LoginService } from 'src/app/services/login/login.service';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../shared/components/state/login/login.actions';
import * as UI from '../../shared/components/state/ui.actions';
import { AppState } from 'src/app/app.reducer';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



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
   dataLogin:any ;

  @Output() datos = new EventEmitter<any>();

  
  constructor(public loginService : LoginService, private store: Store<AppState>, private router:Router) {
    this.store.select('login').subscribe(state => {
      this.dataLogin = state; 
    });
  }

  ngOnInit() {
    this.refresh(); 
    console.log(this.mostrarBoton);
      
  }
  setClose($event: any) {
    this.showModal = false;
  }

  login($event : any){
    // console.log($event);
      this.store.dispatch( UI.stopLoading());
      this.loginService.login($event).subscribe( (res:any) => {
        if(res.status == 200){
          // console.log( res )
        this.store.dispatch( LoginActions.setUser( {token : res.body.result}));
        this.loginService.usuario(res.body.result.id_usuario);
        this.mostrarBoton = false;
        this.showModal = false;
        Swal.fire({
            width: 200,
            position: 'bottom-end',
            icon: 'success',
            title: 'Sesion iniciada correctamente',
            showConfirmButton: false,
            timer: 1300
            })
        }
      }, (error : any) => {
          
            this.store.dispatch( LoginActions.unSetUser());
            Swal.fire({
                width: 200,
                position: 'bottom-end',
                icon: 'error',
                title: 'Error. Credenciales incorrectas',
                showConfirmButton: false,
                timer: 1300
              });
        
    });
  
  }
  logout($event: any){
    // console.log(this.mostrarBoton);
    this.router.navigate(['/home']);
    this.mostrarBoton = true;
    sessionStorage.removeItem('login');
    this.store.dispatch( LoginActions.unSetUser());
    this.store.dispatch( LoginActions.unsetDatosUser());
    
  }

  refresh(){
    (this.dataLogin.token.token && this.dataLogin.token.token != '')? this.mostrarBoton = false : this.mostrarBoton = true;
    
  }
}
