import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuarios/usuarios.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-modal-anadir-usuario',
  templateUrl: './modal-anadir-usuario.component.html',
  styleUrls: ['./modal-anadir-usuario.component.css']
})
export class ModalAnadirUsuarioComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  
  selected = 'option2';
  mostrar: boolean = true;

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
    this.open.emit(value);
  }
  ngOnInit(){
    this.getPerfiles();
  }
  
  getPerfiles(){
    this.usuarios.getPerfiles().subscribe( (res :any) =>{
      this.perfiles = res;
      console.log(res);
      
    })
  }

  anadirUsuario(){
    // console.log(this.formAnadirUsuario.value);
    this.usuarios.postUsuarios(this.formAnadirUsuario.value).subscribe( (res :any ) => {
      // console.log(res);
      
    });
  }

}
