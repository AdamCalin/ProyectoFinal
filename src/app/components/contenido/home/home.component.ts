import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArticulosService } from '../../../services/articulos/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor (private articulosService: ArticulosService){
    
  }
  
  ngOnInit(): void {
      // let articulos = this.articulosService.getArticulos().subscribe( res => { 
      //   console.log(res);
      // });
      
  }
}
