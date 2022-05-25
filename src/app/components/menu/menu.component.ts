import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations : [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(300, style({tram: 1}))
      ]),
      transition('* => void', [
        animate(300, style({opacity: 0}))
      ])
    ])
]
})
export class MenuComponent implements OnInit {

  public showModal: boolean = false;
  public showModal2 :boolean = false;
  public fadeOut: boolean = false;
  
  constructor() {
   }

  ngOnInit() {
  }
  setClose($event: any) {
    this.showModal = false;
    this.showModal2 = false;
  }
}
