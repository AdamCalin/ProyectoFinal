import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TiendaService } from '../../../../services/tienda/tienda.service';
import { ArticulosService } from '../../../../services/articulos/articulos.service';
import { IArticulo } from '../../../../interfaces/articulo.interface';
import { IRopa } from '../../../../interfaces/ropa.interface';
import { SpinnerService } from '../../../../services/spinner/spinner.service';

@Component({
  selector: 'app-contenido-tienda',
  templateUrl: './contenido-tienda.component.html',
  styleUrls: ['./contenido-tienda.component.css']
})
export class ContenidoTiendaComponent implements OnInit {

  datosArticulo: Array<IArticulo> = new Array<IArticulo>() ;
  datosRopa: Array<IRopa> = new Array<IRopa>();
  colorPulsado: any;
  idPulsado: any;
  visible: any;
  colorImagen: any = 'Negro';
  img : any;
  constructor(private serviceTienda: TiendaService, private serviceArticulo: ArticulosService, private spinerService : SpinnerService) { }

  ngOnInit() {
      this.dameArticulos();
  }

  
  filterHombre(){
    let result = this.datosRopa.filter( res => res.sexo == 'H');
    this.datosRopa = result;
    console.log(this.datosRopa);
    
  }
  filterMujer(){
    let result = this.datosRopa.filter( res => res.sexo == 'M');
    this.datosRopa = result;
    console.log(this.datosRopa);
    
  }

  dameArticulos(){
    this.serviceArticulo.getArticulos().subscribe( (resArticulo:Array<IArticulo>) =>{
      // console.log(resArticulo);0
      this.datosArticulo = resArticulo; 
      this.vistaArticulos();
      })
      
  }

  vistaArticulos(){
    this.serviceTienda.getVistaTienda().subscribe( (resRopa:any) =>{
      console.log(resRopa);
      this.datosRopa = resRopa;

    })
  }

  mostrarImagenColor(event:any){
      console.log(event.target.id);     
          this.colorPulsado = event.target.style.color;
          this.idPulsado = event.target.id;  
      switch (this.colorPulsado)
      {
        case 'black' :  {
          
            this.colorImagen = 'Negro'; 
          
          break;
        }  
        case 'white':{
          this.colorImagen = 'Blanco';
          break;

        }
        case 'blue':{
          this.colorImagen = 'Azul';
          break;

        }
        case 'green' :{
          this.colorImagen = 'Verde';
          break;

        }
        case 'purple':{
          this.colorImagen = 'Morado';
          break;

        }
        case 'grey' :{
          this.colorImagen = 'Gris';
          break;

        }
        default : {
          this.colorImagen = 'Negro';
          break;

        }
      
      }
      
  }
}
