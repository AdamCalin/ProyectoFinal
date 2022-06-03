import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { LoginService } from '../../../services/login/login.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();

  @Output() login = new EventEmitter<any>(); 
  @Output() register = new EventEmitter<any>();

  public mostrar: boolean = true;
  
  formLogin : FormGroup;
  formRegister: FormGroup;
  loading: boolean = false;
  uisubscription!: Subscription;

  showModal: boolean = false;
  fadeOut: boolean = false;
  mostrarBoton: boolean = true;

  constructor(private formBuilder : FormBuilder, private store: Store<AppState>, private loginService:LoginService) {
    this.formLogin = this.formBuilder.group({
      user: new FormControl('', Validators.required),
    pass : new FormControl('', Validators.required)
  });
  this.formRegister = this.formBuilder.group({
    user: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    pass : new FormControl('', Validators.required)
});

 
}
 
 
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
  doregister(){
      this.register.emit(this.formRegister.value);
  }

  }
