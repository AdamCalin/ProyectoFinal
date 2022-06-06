import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-anadir-usuario',
  templateUrl: './modal-anadir-usuario.html',
  styleUrls: ['./modal-anadir-usuario.css']
})
export class ModalAnadirUsuarioComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  
  public mostrar: boolean = true;

  
  constructor(){

  }

  // cerrer modulo
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit(){
    
  }


 
}
