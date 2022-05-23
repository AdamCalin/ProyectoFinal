import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
 
})
export class GestionComponent implements OnInit {

  public showModal: boolean = false;
  public fadeOut: boolean = false;
  
  constructor() {
   }

  ngOnInit() {
  }
  setClose($event) {
    this.showModal = false;
  }

}
