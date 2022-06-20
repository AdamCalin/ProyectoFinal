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
  articuloDescripcion: any[] = [];
  articuloPrecio: any[] =[];
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
    if(this.contadorProductos != 0){
      this.contadorProductos = Object.keys(this.productos).length;
        this.state.dispatch( CarritoActions.setContadorCarrito({contador: this.contadorProductos}));
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
    this.getArticulos();
  }


  borrarProducto(event:any){
    console.log(event.target.id);
    this.productoId = event.target.id;
    this.state.dispatch( CarritoActions.unSetCarrito());
  }
  

  getArticulos(){
    this.servicioArticulos.getArticulos().subscribe((res:any) =>{
      
      for(let art of res){
        for(let articulo of this.data){
          if(articulo[0].iD_ARTICULO == art.iD_ARTICULO){
            this.articuloDescripcion.push({id:art.iD_ARTICULO, descripcion:art.descripcion});
          }
        }
      }
      console.log(this.articuloDescripcion);
      for(let art of res){
        for(let articulo of this.data){
          if(articulo[0].iD_ARTICULO == art.iD_ARTICULO){
            this.articuloPrecio.push({id:art.iD_ARTICULO, precio:art.precio});
            
          }
        }
      }
      for(let i = 0; i<this.articuloPrecio.length; i++){
        
        this.totalPrecio += this.articuloPrecio[i].precio;
      }      
      
    })
  }

}
