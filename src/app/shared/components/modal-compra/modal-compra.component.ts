import { Component, OnInit,   Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from '../../../services/pedidos/pedidos.service';
import * as CarritoActions from '../../../shared/components/state/carrito/carrito.actions';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  mostrarBoton: boolean = true;
  dataUser: any; 
  formComprar: FormGroup;
  id:any;
  usuario:any;
  JsonPedidos = {
    usuario:'',
    codigo:'',
  }
  
  constructor(private store: Store<AppState>, private router:Router, private formBuilder : FormBuilder, private servicioPedido: PedidosService){ 
    this.formComprar = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      calle: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),

      tarjeta: new FormControl('', Validators.required,),
      fecha: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
  })
    this.store.select('login').subscribe((state) => {
      // console.log(state.datosUser);
      this.dataUser = state.datosUser;
      this.id = state.datosUser.iD_USUARIO;
      this.usuario = state.datosUser.usuario;
    }); 
     

  }
 
  
  setClose2() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit() {
  
  }

  crearPedido(){
    this.setClose2();
   
    this.JsonPedidos.usuario = this.usuario;
    if(this.formComprar.invalid){
      this.servicioPedido.crearPedido(this.JsonPedidos).subscribe( (res:any) => {
        // console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Comprar Carrito',
          text: res.mensaje
        });
    }) 
    }
     this.store.dispatch( CarritoActions.unSetCarrito());
  }

}
