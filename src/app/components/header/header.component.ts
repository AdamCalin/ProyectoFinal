import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { ArticulosService } from '../../services/articulos/articulos.service';

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
  
  constructor(private articulosService : ArticulosService) {
   }

  ngOnInit() {
  }
  setClose($event: any) {
    this.showModal = false;
  }
  login($event : any){
    console.log($event);
    
    this.articulosService.login($event).subscribe( res =>{
      console.log(res);
      if(res.status == 200){
        
      }
      else{
        
      }
    },
    err =>
    {
      console.log(err.error)
    }
    )
  }
}
