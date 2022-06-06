import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAnadirUsuarioComponent } from './modal-anadir-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [ ModalAnadirUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  exports : [ ModalAnadirUsuarioComponent, ]
})
export class ModalAnadirUsuario { }
