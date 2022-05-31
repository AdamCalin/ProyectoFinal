import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ArticulosService } from 'src/app/services/articulos/articulos.service';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../../states/loginstate/login.actions';


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

  constructor(private formBuilder : FormBuilder, private store: Store) {
    this.formLogin = this.formBuilder.group({
      user: new FormControl('', Validators.required),
    pass : new FormControl('', Validators.required)
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
    const credentials = {
      user: this.formLogin.user,
      password: this.formLogin.pass
    }

    this.store.dispatch(LoginActions.loginRequest(credentials));
    this.login.emit(this.formLogin.value);
  }
}
