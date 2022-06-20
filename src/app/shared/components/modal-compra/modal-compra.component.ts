import { Component, OnInit,   Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent implements OnInit {

  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  mostrarBoton: boolean = true;
  dataUser: any; 
  formComprar: FormGroup;

  constructor(private store: Store<AppState>, private router:Router, private formBuilder : FormBuilder){ 
    this.formComprar = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      calle: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),

      tarjeta: new FormControl('', Validators.required,),
      fecha: new FormControl('', Validators.required),
      cvc: new FormControl('', Validators.required),
  })
    this.store.select('login').subscribe((state) => {
      // console.log(state.datosUser);
      this.dataUser = state.datosUser;
    }); 
      

  }
 
  
  setClose2() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit() {
   
  }

  

}
