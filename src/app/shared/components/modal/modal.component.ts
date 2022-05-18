import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() position: string = 'right'; 

  // @Output() open = new EventEmitter<boolean>();
  // setClose(value: boolean) {
  //   this.open.emit(value);
  // }

  constructor() { }

  ngOnInit() {
  }

}
