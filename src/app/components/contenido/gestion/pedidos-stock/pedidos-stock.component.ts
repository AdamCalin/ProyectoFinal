import { Component, OnInit, AfterViewInit, ViewChild, Input, NgModule } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { trigger, animate, transition, style, state } from '@angular/animations';
import Swal from 'sweetalert2';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as FormActions from '../../../../shared/components/state/usuario-gestion/usuario-gestion.action';
import { StockService } from '../../../../services/stock/stock.service';


@Component({
  selector: 'app-pedidos-stock',
  templateUrl: './pedidos-stock.component.html',
  styleUrls: ['./pedidos-stock.component.css'],
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
export class PedidosStockComponent implements AfterViewInit {

  displayedColumns: string[] = ['Articulo', 'Color','Talla','Cantidad_stock', 'Cantidad_pedido', 'Cantidad_envio', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo usuarios
  showModalAdd: boolean = false;
  showModalEdit: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;

  @Input() id = '';

  constructor(private servicioStock: StockService, private store: Store<AppState>){

  }
  ngAfterViewInit() {
    this.datosVistaStock();
    this.dataSource.paginator = this.paginator;
  }

  datosVistaStock(){
    this.servicioStock.getVistaStock().subscribe( (articulos: any) => {
      console.log(articulos);
      this.dataSource.data = articulos;
      
    })
  }
  confirmarBorrarArticulo(id :any){
    
    Swal.fire({
      title: 'Advertencia!!',
      text: "¿Estas seguro de que quieres Borrar esa Version Articulo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.borrarArticulo(id);
        Swal.fire(
          'Version Articulo borrado Correctamente!',
        )
      }
    })
  }
  borrarArticulo(id : any){    
    this.servicioStock.deleteArticulo(id).subscribe( (res : any) => {
      console.log(res);
      this.datosVistaStock();
    })
  }
 
  setClose($event: any) {
    this.showModalAdd = false;
    this.showModalEdit = false;
    this.store.dispatch( FormActions.unSetForm());
  }

  actualizarDatos($event : any){
    if($event == true){
    }
  }
  filter(event : any){
      let filter = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filter.trim().toUpperCase();
  }


}

export interface PeriodicElement {
 Articulo: string,
 Color: string,
 Talla: string,
 Cantidad_pedido: number,
 Cantidad_stock: number,
 Cantidad_envio: number
}

let  ELEMENT_DATA: PeriodicElement[] = [
]


