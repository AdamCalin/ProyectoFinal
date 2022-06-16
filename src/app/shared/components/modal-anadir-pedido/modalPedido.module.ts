import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAnadirPedidoComponent } from './modal-anadir-pedido.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ModalAnadirPedidoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [ ModalAnadirPedidoComponent ]
})
export class ModalModulePedido { }
