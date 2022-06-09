import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuarios/usuarios.service';


@Component({
  selector: 'app-modal-anadir-usuario',
  templateUrl: './modal-anadir-usuario.component.html',
  styleUrls: ['./modal-anadir-usuario.component.css']
})
export class ModalAnadirUsuarioComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() openAdd = new EventEmitter<boolean>();
  
  @Output() datos = new EventEmitter<boolean>();
  selected = 'option2';
  mostrar: boolean = true;
  dataUsuarios : any;
  formAnadirUsuario: FormGroup ;

   constructor(private formBuilder : FormBuilder, private usuarios: UsuarioService) {
      this.formAnadirUsuario = this.formBuilder.group({
        usuario: new FormControl('', Validators.required),
      pass : new FormControl(''),
      id_perfil : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
    })
     }

     perfiles : any;
  // cerrer modulo
  setClose() {
    let value = false;
    this.openAdd.emit(value);
  }
  ngOnInit(){
    this.getPerfiles();
  }
  
  getPerfiles(){
    this.usuarios.getPerfiles().subscribe( (res :any) =>{
      this.perfiles = res;
      // console.log(res);
      
    })
  }
 


  anadirUsuario(){
    // console.log(this.formAnadirUsuario.value);
    this.usuarios.postUsuarios(this.formAnadirUsuario.value).subscribe( (res :any ) => {
      // console.log(res);
      if(res.retCode == 0){
        Swal.fire({
          icon: 'success',
          title: 'Añadir Usuario',
          text: res.mensaje
        });
        this.datos.emit(true);
        this.setClose();
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Añadir Usuario',
          text: res.mensaje
        });
      }
      // console.log(res);
    }, (error :any) => {
      Swal.fire({
        icon: 'error',
        title: 'Añadir Usuario',
        text: error.mensaje
      });
    });
  }

}
