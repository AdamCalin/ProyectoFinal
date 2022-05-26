import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();

  @Output() login = new EventEmitter<any>();
 
  public mostrar: boolean = true;
  
  formLogin : FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.formLogin = this.formBuilder.group({
      user: new FormControl(''),
    pass : new FormControl('')
  }) }
 
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

  dologin(){
    this.login.emit(this.formLogin.value);
  }
}
