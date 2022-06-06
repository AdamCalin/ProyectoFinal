import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';
import { trigger, animate, transition, style } from '@angular/animations';


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

  //variables form crear nuevo usuarios
  showModal: boolean = false;
  showModal2 :boolean = false;
  fadeOut: boolean = false;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private usuarios: UsuarioService){

  }

  ngAfterViewInit() {
    this.datosUsuarios();
    this.dataSource.paginator = this.paginator;
  }

  datosUsuarios(){    
    this.usuarios.getUsuarios().subscribe( ( users :any) => {
      this.usuarios.getPerfiles().subscribe( (perfiles: any) => {
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
   
  setClose($event: any) {
    this.showModal = false;
    this.showModal2 = false;
  }

}

export interface PeriodicElement {
  usuario: string;
  email: string;
  perfil: string;
}

let  ELEMENT_DATA: PeriodicElement[] = [
]