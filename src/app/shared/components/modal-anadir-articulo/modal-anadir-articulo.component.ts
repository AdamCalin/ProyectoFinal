import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal-anadir-articulo',
  templateUrl: './modal-anadir-articulo.component.html',
  styleUrls: ['./modal-anadir-articulo.component.css']
})
export class ModalAnadirArticuloComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
 
  public mostrar: boolean = true;
  


  constructor() { }
 
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit(){
    
  }
}
