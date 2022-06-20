import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCarritoComponent } from './modal-carrito.component';
import { ModalModuleCompra } from '../modal-compra/modalCompra.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  declarations: [ ModalCarritoComponent],
  imports: [
    CommonModule,
    ModalModuleCompra,
    ScrollingModule,
  ],
  exports : [ ModalCarritoComponent ]
})
export class ModalModuleCarrito { 


}
