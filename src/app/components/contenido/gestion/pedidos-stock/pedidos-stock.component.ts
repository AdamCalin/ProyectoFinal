import { Component, OnInit } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';

@Component({
  selector: 'app-pedidos-stock',
  templateUrl: './pedidos-stock.component.html',
  styleUrls: ['./pedidos-stock.component.css'],
  animations : [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(300, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(300, style({opacity: 0}))
      ])
    ])
  ]
})
export class PedidosStockComponent implements OnInit {

  public showModal: boolean = false;
  public fadeOut: boolean = false;
  
  constructor() {
   }

  ngOnInit() {
  }
  setClose($event: any) {
    this.showModal = false;
  }

}
