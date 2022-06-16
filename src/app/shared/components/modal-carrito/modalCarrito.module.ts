import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCarritoComponent } from './modal-carrito.component';
import { ModalModuleCompra } from '../modal-compra/modalCompra.module';

@NgModule({
  declarations: [ ModalCarritoComponent],
  imports: [
    CommonModule,
    ModalModuleCompra
  ],
  exports : [ ModalCarritoComponent ]
})
export class ModalModuleCarrito { }
