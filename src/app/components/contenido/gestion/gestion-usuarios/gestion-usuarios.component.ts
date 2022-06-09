import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';
import { trigger, animate, transition, style, state } from '@angular/animations';
import Swal from 'sweetalert2';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as FormActions from '../../../../shared/components/state/usuario-gestion/usuario-gestion.action';



@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css'],
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
export class GestionUsuariosComponent implements AfterViewInit {
  displayedColumns: string[] = ['usuario', 'email', 'perfil', 'edit', 'delete'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo usuarios
  showModalAdd: boolean = false;
  showModalEdit: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;

  @Input() id = '';

  constructor(private servicioUser: UsuarioService, private store: Store<AppState>){

  }
  ngAfterViewInit() {
    this.datosUsuarios();
    this.dataSource.paginator = this.paginator;
  }

  datosUsuarios(){    
    this.servicioUser.getUsuarios().subscribe( ( users :any) => {
      // console.log(users);
      
      this.servicioUser.getPerfiles().subscribe( (perfiles: any) => {
        // console.log(this.dataSource.data);
        for ( let usuario of users){
          for (let perfil of perfiles){
            if(usuario.iD_PERFIL === perfil.id_perfil){
              usuario.iD_PERFIL = perfil.perfil;
            } 
          }
        }
      })
      this.dataSource.data = users;
      // console.log(this.dataSource.data);
    });
   
  }
  
  getUsuarioId(id: any){
      this.servicioUser.getUsusarioId(id).subscribe( (res :any) => {
          // console.log(res);
        this.store.dispatch( FormActions.setForm( {data : res}));
      });
  }


  setClose($event: any) {
    this.showModalAdd = false;
    this.showModalEdit = false;
    this.store.dispatch( FormActions.unSetForm());
    this.store.dispatch( FormActions.unsetIdPerfil());
  }
  
  confirmBorrarUsuario(id :any){
    
    Swal.fire({
      title: 'Advertencia!!',
      text: "¿Estas seguro de que quieres Borrar ese Usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro!'
    }).then((result) => {
      if (result.isConfirmed) {
          this.borrarUsuario(id);
        Swal.fire(
          'Usuario borrado Correctamente!',
        )
      }
    })
  }
  borrarUsuario(id : any){    
    this.servicioUser.deleteUsuarios(id).subscribe( (res : any) => {
      // console.log(res);
      this.datosUsuarios();
    })
  }
  actualizarDatos($event : any){
    if($event == true){
      this.datosUsuarios();
    }
  }
  filter(event : any){
      let filter = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filter.trim().toUpperCase();
  }


}

export interface PeriodicElement {
  usuario: string;
  email: string;
  perfil: string;
}

let  ELEMENT_DATA: PeriodicElement[] = [
]


