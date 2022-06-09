import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuarios/usuarios.service';
import * as FormActions from '../../../shared/components/state/usuario-gestion/usuario-gestion.action';




@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.css']
})
export class ModalEditarUsuarioComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() openEdit = new EventEmitter<boolean>();
  
  @Output() datos = new EventEmitter<boolean>();

  mostrar: boolean = true;
  dataUsuarios : any;
  formEditarUsuario: FormGroup ;
  perfiles : any;
  resultRellenoForm:any;
  defaultPerfil : any;
  idUsuario: any;
   constructor(private formBuilder : FormBuilder, private servicioUser: UsuarioService, private store: Store<AppState>) {
    this.store.select('data').subscribe((state) => {
      this.resultRellenoForm = state.data;
      });
      this.store.select('data').subscribe((state) => {
        this.idUsuario = state.data.iD_USUARIO;
        // console.log(this.idUsuario);
        
        });
      this.formEditarUsuario = this.formBuilder.group({
        id_usuario: new FormControl('', Validators.required),
        usuario: new FormControl('', Validators.required),
        iD_PERFIL: new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
    });
    this.store.select('data').subscribe((state) => {
      this.resultRellenoForm = state.data;
      });
     
   }

  // cerrer modulo
  setClose() {
    let value = false;
    this.openEdit.emit(value);
  }
  ngOnInit(){
    this.getPerfiles();
    this.rellenarForm();
    
  }

  
  getPerfiles(){
    this.servicioUser.getPerfiles().subscribe( (res :any) =>{
      this.perfiles = res;
      // console.log(res);
    })
  }
 
  rellenarForm(){
    
    setTimeout(() => {
      this.formEditarUsuario.value.iD_USUARIO = this.idUsuario;
      this.servicioUser.getPerfiles().subscribe( (perfiles: any) => {
        // console.log(this.resultRellenoForm);
          for (let perfil of perfiles){
            if(this.resultRellenoForm.iD_PERFIL === perfil.id_perfil){
              let result = this.resultRellenoForm.iD_PERFIL;
              result = perfil.perfil;
              // console.log(result);
              this.store.dispatch( FormActions.setIdPerfil( {perfil : result}));
              this.formEditarUsuario.patchValue(this.resultRellenoForm);
              this.store.select('data').subscribe((state) => {
                this.defaultPerfil = state.perfil;
                // console.log(this.defaultPerfil);
                });
            } 
          }
      })
    }, 100);
  }



  editarUsuario(){
    // console.log(this.formEditarUsuario.value);
    for (let perfil of this.perfiles){
      if(this.formEditarUsuario.value.iD_PERFIL === perfil.perfil){
        let result = this.resultRellenoForm.iD_PERFIL;
        this.formEditarUsuario.value.id_usuario = this.idUsuario;
        this.formEditarUsuario.value.iD_PERFIL = perfil.id_perfil;
        // console.log( this.formEditarUsuario.value);
        
      } 

    }
    this.servicioUser.updateUsuarios(this.formEditarUsuario.value).subscribe( (res :any ) => {
      // console.log(res);
      if(res.retCode == 0){
        Swal.fire({
          icon: 'success',
          title: 'Editar Usuario',
          text: res.mensaje
        });
        this.datos.emit(true);
        this.setClose();
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Editar Usuario',
          text: res.mensaje
        });
      }
      // console.log(res);
    }, (error :any) => {
      Swal.fire({
        icon: 'error',
        title: 'Editar Usuario',
        text: error.mensaje
      });
    });
  }

}
