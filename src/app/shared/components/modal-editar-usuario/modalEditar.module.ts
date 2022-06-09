import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarUsuarioComponent } from './modal-editar-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [ ModalEditarUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  exports : [ ModalEditarUsuarioComponent, ]
})
export class ModalEditarUsuario { }
