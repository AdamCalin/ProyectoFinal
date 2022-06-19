import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CarritoActions from '../../../shared/components/state/carrito/carrito.actions';

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.component.html',
  styleUrls: ['./modal-carrito.component.css'],
  animations:[
  trigger('move', [
    transition('void => *', [
      animate(300, style({
        transform:'translateX(-100px)'
      }))
    ]),
      transition('* => void', [
        animate(300, style({
          transform:'translateX(120px)'
        }))
      ])
    ]),
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
export class ModalCarritoComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
 
  public mostrar: boolean = true;
  showModal: boolean = false;
  permisos: any;
  productos:any;
  data:any;
  productoId:any;
  contadorProductos:any;
  mensaje:any;
  constructor(private state : Store<AppState>) { 
    this.state.select('login').subscribe( (res:any) => {
      this.permisos = res.datosUser.iD_PERFIL;
      // console.log(this.permisos);
    })
    this.state.select('carrito').subscribe( (res:any) => {     
        this.productos = res.carrito;
      console.log(this.productos);
      this.data = Object.values(this.productos);
      this.contadorProductos = Object.keys(this.productos).length;
    
    })
    this.productos = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
    console.log(this.contadorProductos);
    if(this.contadorProductos != 0){
      this.state.dispatch( CarritoActions.setContadorCarrito({contador: this.contadorProductos}));
    }
    this.contadorProductos = Object.keys(this.productos).length;
  }
 
  setClose() {
    let value = false;
    this.open.emit(value);
   
  }
  setClose2($event: any) {
    this.showModal = false;
    
  }
  ngOnInit() {
  }


  borrarProducto(event:any){
    console.log(event.target.id);
    this.productoId = event.target.id;
    this.state.dispatch( CarritoActions.unSetCarrito());
  }

}
