import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-realizados-llegados',
  templateUrl: './realizados-llegados.component.html',
  styleUrls: ['./realizados-llegados.component.css']
})
export class RealizadosLlegadosComponent implements AfterViewInit {
  displayedColumns: string[] = ['Codigo','Estado','Fecha', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo usuarios
  showModalAdd: boolean = false;
  showModalEdit: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;


  constructor(){

  }
  ngAfterViewInit() {
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
          this.borrarArticulo(id);
        Swal.fire(
          'Version Articulo borrado Correctamente!',
        )
      }
    })
  }
  borrarArticulo(id : any){    

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
Codigo:string,
Estado:number,
Fecha:Date
}

let  ELEMENT_DATA: PeriodicElement[] = [
]


