import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAnadirArticuloComponent } from './modal-anadir-articulo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ModalAnadirArticuloComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [ ModalAnadirArticuloComponent ]
})
export class ModalModuleArticulo { }
