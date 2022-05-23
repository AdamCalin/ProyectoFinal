import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
export class HeaderComponent implements OnInit {

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
