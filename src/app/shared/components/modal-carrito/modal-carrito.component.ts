import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CarritoActions from '../../../shared/components/state/carrito/carrito.actions';
import { ArticulosService } from '../../../services/articulos/articulos.service';

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
  totalPrecio: number = 0;

  constructor(private state : Store<AppState>, private servicioArticulos: ArticulosService) { 
    this.state.select('login').subscribe( (res:any) => {
      this.permisos = res.datosUser.iD_PERFIL;
      // console.log(this.permisos);
    })
    this.state.select('carrito').subscribe( (res:any) => {     
        this.productos = res.carrito;  

      this.data = Object.values(this.productos);
    })
    // console.log(this.contadorProductos);
 
    for(let art of this.data){
       this.totalPrecio += art[0].precio;
      //  console.log(this.totalPrecio);
    }
    this.productos = Array.from({length: 1000}).map((_, i) => `Item #${i}`);
    
  }
 
  setClose() {
    let value = false;
    this.open.emit(value);
   
  }
  setClose2($event: any) {
    this.showModal = false;
    
  }
  ngOnInit() {
    if(this.contadorProductos != 0){
      this.contadorProductos = Object.keys(this.data).length;
      // console.log(this.contadorProductos);
        this.state.dispatch( CarritoActions.setContadorCarrito({contador: this.contadorProductos}));
      }
  }

  actualizarPrecio(){
    this.state.select('carrito').subscribe( (res:any) => {     
      this.productos = res.carrito;  

     this.data = Object.values(this.productos);
     console.log(this.data);
     
  })
  }

  borrarProducto(event:any){
    this.state.dispatch( CarritoActions.unSetCarrito());
    this.state.dispatch( CarritoActions.unSetContadorCarrito());
  }
  


}
