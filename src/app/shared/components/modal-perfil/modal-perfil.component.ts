import { Component, OnInit,   Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import * as LoginActions from '../../components/state/login/login.actions';


@Component({
  selector: 'app-modal-perfil',
  templateUrl: './modal-perfil.component.html',
  styleUrls: ['./modal-perfil.component.css']
})
export class ModalPerfilComponent implements OnInit {

  @Input() position: string = 'right'; 
  @Input() datosUsuario: any;

  @Output() open = new EventEmitter<boolean>();
  mostrarBoton: boolean = true;
  dataUser: any; 

  constructor(private store: Store<AppState>, private router:Router){ 
    this.store.select('login').subscribe((state) => {
      // console.log(state.datosUser);
      this.dataUser = state.datosUser;
    }); 
  }
 
  
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit() {
   
  }

  logout($event: any){
    this.mostrarBoton = true;
    sessionStorage.removeItem('login');
    this.store.dispatch( LoginActions.unSetUser());
    this.store.dispatch( LoginActions.unsetDatosUser());
  }

  redireccionPedidos(){
      this.router.navigate(['/pedidos']);
      this.setClose();
  }

}
