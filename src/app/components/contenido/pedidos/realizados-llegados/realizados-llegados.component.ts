import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { State } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import Swal from 'sweetalert2';
import { PedidosService } from '../../../../services/pedidos/pedidos.service';

@Component({
  selector: 'app-realizados-llegados',
  templateUrl: './realizados-llegados.component.html',
  styleUrls: ['./realizados-llegados.component.css']
})
export class RealizadosLlegadosComponent implements AfterViewInit{
  displayedColumns: string[] = ['Codigo','Estado','Fecha', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo usuarios
  showModalAdd: boolean = false;
  showModalEdit: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;
  usuario:any;

  constructor(private servicePedidos: PedidosService, private store: State<AppState>){
    this.store.subscribe( (res:any) => {
      // console.log(res.login.datosUser.usuario);
      this.usuario = res.login.datosUser.usuario;
    })
  } 


  ngAfterViewInit() {
    this.getPedidos();
    this.dataSource.paginator = this.paginator;
  }


  confirmarBorrarPedido(id :any){
    
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
          this.borrarPedido(id);
          this.getPedidos();
        Swal.fire(
          'Version Articulo borrado Correctamente!',
        )
      }
    })
  }
  borrarPedido(id : any){    
    this.servicePedidos.borrarPedido(id).subscribe( (res:any) =>{
      // console.log(res);
    })
  }
 
  getPedidos(){
    this.servicePedidos.getPedidos(this.usuario).subscribe( (res:any) => {
      console.log(res);
      this.dataSource.data = res;
    })
  }

  actualizarDatos($event : any){
    if($event == true){
      this.getPedidos();
    }
  }
  filter(event : any){
      let filter = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filter.trim().toUpperCase();
  }


}

export interface PeriodicElement {
Codigo:string,
Estado:number,
Fecha: string
}

let  ELEMENT_DATA: PeriodicElement[] = [
]


