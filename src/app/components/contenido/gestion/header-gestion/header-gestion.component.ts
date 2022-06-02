import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-header-gestion',
  templateUrl: './header-gestion.component.html',
  styleUrls: ['./header-gestion.component.css']
})
export class HeaderGestionComponent implements OnInit {

  permisos: any;
  constructor(private store:Store<AppState>) { 
    this.store.select('login').subscribe((state) => {
      // console.log(state.datosUser.iD_PERFIL);
      this.permisos = state.datosUser.iD_PERFIL;
    });
  
  }
  ngOnInit() {
  }

}
