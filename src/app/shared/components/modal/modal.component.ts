import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
 
  public mostrar: boolean = true;
  


  constructor() { }
 
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit() {
    
  }
  mostrarLogin(){
    this.mostrar = true;

  }
  mostrarRegister(){
    this.mostrar = false;

  }
}
