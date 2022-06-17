import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/app/services/stock/stock.service';
import { PedidosArticulosService } from '../../../../services/pedidos_articulos/pedidos_articulos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pedidos-gestion',
  templateUrl: './pedidos-gestion.component.html',
  styleUrls: ['./pedidos-gestion.component.css'],
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
export class PedidosGestionComponent implements AfterViewInit {

  displayedColumns: string[] = ['descripcion', 'talla', 'color', 'cantidad', 'precio_und', 'precio', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo pedidos
  showModal: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;

  @Input() id = '';

  ngAfterViewInit() {
    this.datosPedidos();
    this.dataSource.paginator = this.paginator;
  }
  @Input() position: string = 'right'; 

  
  public mostrar: boolean = true;


   constructor(private formBuilder : FormBuilder, private store: Store<AppState>, private servicioPedidosArticulos: PedidosArticulosService) {

     }

    setClose($event: any) {
      this.showModal = false;
    }

  datosPedidos(){
   this.servicioPedidosArticulos.damePedidosArticulos().subscribe( (res:any) => {
    //  console.log(res);
     this.dataSource.data = res;
   })
  }


  actualizarDatos($event : any){
    if($event == true){
      this.datosPedidos();
    }
  }



  
  confirmarBorrarPedido(id :any){
    
    Swal.fire({
      title: 'Advertencia!!',
      text: "¿Estas seguro de que quieres Borrar ese Pedido?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.borrarPedido(id);
        Swal.fire(
          'Pedido borrado Correctamente!',
        )
      }
    })
  }
  borrarPedido(id : any){    
    this.servicioPedidosArticulos.deletePedido(id).subscribe( (res : any) => {
      // console.log(res);
      this.datosPedidos();
    })
  }

  filter(event : any){
    let filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toUpperCase();
}

}

export interface PeriodicElement {
 descripcion: string,
 talla: string,
 color: string, 
 precio_und: number,
 precio: number
}

let  ELEMENT_DATA: PeriodicElement[] = [
]

