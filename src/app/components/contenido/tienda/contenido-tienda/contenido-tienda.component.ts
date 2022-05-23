import { Component, OnInit } from '@angular/core';
import { PrendaService } from 'src/app/services/prenda.service';
import { Prenda } from '../../../../services/prenda.service';
@Component({
  selector: 'app-contenido-tienda',
  templateUrl: './contenido-tienda.component.html',
  styleUrls: ['./contenido-tienda.component.css']
})
export class ContenidoTiendaComponent implements OnInit {


  prenda:Prenda[] = [];
  constructor(private _prendaService: PrendaService) { }

  ngOnInit() {

    this.prenda = this._prendaService.getPrenda();
    console.log(this.prenda);
  }

  // click(color){
  //   let url = `${this.url}/${color}`
  // }
}
