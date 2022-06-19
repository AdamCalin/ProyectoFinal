import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TiendaService } from '../../../../services/tienda/tienda.service';
import { ArticulosService } from '../../../../services/articulos/articulos.service';
import { IArticulo } from '../../../../interfaces/articulo.interface';
import { IRopa } from '../../../../interfaces/ropa.interface';
import { SpinnerService } from '../../../../services/spinner/spinner.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as CarritoActions from '../../../../shared/components/state/carrito/carrito.actions';
import { ICarrito } from '../../../../shared/components/state/interfaces/carrito.interface';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

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
  colorImagen: any = 'Negro';
  resultRopa: any;
  carritoRopaId: any;
  carritoRopaColor: any;
  datosCarrito = {iD_ARTICULO: 0, color:""};
  arrayCarrito: Array<any> = [];

  
  constructor(private serviceTienda: TiendaService, 
    private serviceArticulo: ArticulosService, 
    private spinerService : SpinnerService, 
    private state : Store<AppState>,
    private serviceCarrito: CarritoService ) { 

    }

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
      console.log(resArticulo);
      this.datosArticulo = resArticulo; 
      this.vistaArticulos();
      })
      
  }

  vistaArticulos(){
    this.serviceTienda.getVistaTienda().subscribe( (resRopa:any) =>{
      // console.log(resRopa);
      this.datosRopa = resRopa;

    })
  }


  anadirCarrito(event: any){
    this.carritoRopaId = event.target.id;
    this.carritoRopaColor = this.colorImagen;
    this.datosCarrito.iD_ARTICULO = this.carritoRopaId;
    this.datosCarrito.color = this.carritoRopaColor;
    this.serviceCarrito.ropaCarrito( this.datosCarrito.color, this.datosCarrito.iD_ARTICULO).subscribe( (res:any) => {
      // console.log(res);
      this.resultRopa = res;
      console.log(this.resultRopa);
      this.arrayCarrito = Object.assign([], this.arrayCarrito);
      this.arrayCarrito.push(this.resultRopa);
      console.log(this.arrayCarrito);
    this.state.dispatch( CarritoActions.setCarrito({carrito: this.arrayCarrito}));
    })
  }

  mostrarImagenColor(event:any){
      // console.log(event.target.id);  
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
