import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAnadirUsuarioComponent } from './modal-anadir-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ModalAnadirUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [ ModalAnadirUsuarioComponent ]
})
export class ModalModuleUsuario { }
