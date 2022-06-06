import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
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

  //  @Input() datosUsuario : any;



   showModal: boolean = false;
   showModal2 :boolean = false;
   fadeOut: boolean = false;
   permisos: any;


  constructor(private store:Store<AppState>) { 
    this.store.select('login').subscribe((state) => {
      // console.log(state.datosUser.iD_PERFIL);
      this.permisos = state.datosUser.iD_PERFIL;
    });
  
  }

  ngOnInit() {
  //  console.log(this.datosUsuario);
    
    
  }


  setClose($event: any) {
    this.showModal = false;
    this.showModal2 = false;
  }
}
