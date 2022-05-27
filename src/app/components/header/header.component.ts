import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { ArticulosService } from '../../services/articulos/articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

   showModal: boolean = false;
   fadeOut: boolean = false;
   mostrarBoton: boolean = true;
  datosUsuario:any;

  @Output() datos = new EventEmitter<any>();
  constructor(public articulosService : ArticulosService) {
   }

  ngOnInit() {
    this.refresh();    
  }
  setClose($event: any) {
    this.showModal = false;
  }

  login($event : any){
    console.log($event);
    
    this.articulosService.login($event).subscribe( res =>{
      console.log(res);
      
      if(res.status == 200){
        this.mostrarBoton = false;
        this.showModal = false;
        sessionStorage.setItem('token', res.body.result.token);
        sessionStorage.setItem('id', res.body.result.id_usuario);
        Swal.fire({
          width: 200,
          position: 'bottom-end',
          icon: 'success',
          title: 'Sesion iniciada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        
          this.articulosService.usuario(sessionStorage.getItem('id')).subscribe( res => {
            console.log(res);
            this.datosUsuario = res;
            this.datos.emit(res);
          }, err =>
          {
            console.log(err.error);
           
          });
        
       
      }
    },
    err =>
    {
      console.log(err.error);
      Swal.fire({
        width: 200,
        position: 'bottom-end',
        icon: 'error',
        title: 'Error. Credenciales incorrectos',
        showConfirmButton: false,
        timer: 1500
      })
    }
    );
    
  }
  logout($event: any){
    this.mostrarBoton = true;
    sessionStorage.clear();
  }

  refresh(){

    sessionStorage.getItem('token') ? this.mostrarBoton = false : this.mostrarBoton = true;
  }

}
