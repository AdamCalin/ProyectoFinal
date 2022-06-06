import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { trigger, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.component.html',
  styleUrls: ['./modal-carrito.component.css'],
  animations:[
  trigger('move', [
    transition('void => *', [
      animate(300, style({
        transform:'translateX(-100px)'
      }))
    ]),
      transition('* => void', [
        animate(300, style({
          transform:'translateX(120px)'
        }))
      ])
    ])
  ]
})
export class ModalCarritoComponent implements OnInit {

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
}
