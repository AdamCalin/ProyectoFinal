import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticulosService } from '../../../services/articulos/articulos.service';
import { PedidosArticulosService } from 'src/app/services/pedidos_articulos/pedidos_articulos.service';


@Component({
  selector: 'app-modal-anadir-pedido',
  templateUrl: './modal-anadir-pedido.component.html',
  styleUrls: ['./modal-anadir-pedido.component.css'],
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
export class ModalAnadirPedidoComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  @Output() datos = new EventEmitter<boolean>();
  

  public mostrar: boolean = true;
  formAnadirPedido: FormGroup ;
  articulos:any;

   constructor(private formBuilder : FormBuilder, private articulosService: ArticulosService, private pedidosArticulosService:PedidosArticulosService ) {
      this.formAnadirPedido = this.formBuilder.group({
      iD_ARTICULO: new FormControl('{{this.articulos.iD_ARTICULO}}', Validators.required),
      descripcion: new FormControl(''),
      cantidad: new FormControl('', Validators.required),
      talla : new FormControl('', Validators.required),
      color : new FormControl('', Validators.required),
    })
     }

  // cerrer modulo
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit(){
    this.dameArticulos();
  }



  // formulario añadir articulo
    dameArticulos(){
      this.articulosService.getArticulos().subscribe((res:any) => {
        // console.log(res);
        this.articulos = res;
      })
    }

    anadirPedido(){
      // console.log(this.formAnadirPedido.value);

      this.pedidosArticulosService.crearPedidoArticulo(this.formAnadirPedido.value).subscribe( (res:any) =>{
        // console.log(res);
        if(res.retCode == 0){
          Swal.fire({
            icon: 'success',
            title: 'Añadir Pedido',
            text: res.mensaje
          });
          this.datos.emit(true);
          this.setClose();
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Añadir Pedido',
            text: res.mensaje
          });
        }
        // console.log(res);
      }, (error :any) => {
        Swal.fire({
          icon: 'error',
          title: 'Añadir Pedido',
          text: error.mensaje
        });
      });
    } 
  
}
