import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticulosService } from '../../../services/articulos/articulos.service';


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
  
  public mostrar: boolean = true;
  formAnadirPedido: FormGroup ;


   constructor(private formBuilder : FormBuilder, private articulosService: ArticulosService) {
      this.formAnadirPedido = this.formBuilder.group({
      descripcion: new FormControl('', Validators.required),
      talla : new FormControl('', Validators.required),
      color : new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required)
    })
     }

  // cerrer modulo
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit(){
    
  }



  // formulario añadir articulo
  anadirPedido(){
    
    // console.log(this.formAnadirArticulo.value.imagen);
    this.articulosService.anadirArticulos(this.formAnadirPedido.value).subscribe( res => {
      console.log(res);
      if(res.retCode == 0){
        Swal.fire({
          icon: 'success',
          title: 'Añadir Articulo',
          text: res.mensaje
        });
        this.setClose();
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Añadir Articulo',
          text: res.mensaje
        });
        this.setClose();
      }
      // console.log(res);
    }, (error :any) => {
      Swal.fire({
        icon: 'error',
        title: 'No se ha podido añadir el Articulo',
        text: error.mensaje
      });
      this.setClose();
    });
  }
  
}
