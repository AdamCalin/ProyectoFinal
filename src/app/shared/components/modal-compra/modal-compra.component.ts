import { Component, OnInit,   Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.reducer';


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

  constructor(private store: Store<AppState>, private router:Router){ 
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
