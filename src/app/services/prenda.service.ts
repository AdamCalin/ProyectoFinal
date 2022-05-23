import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PrendaService {

private prenda:Prenda[] = [

  {
    nombre:"Camisa Negra",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverNegraLogo.png",
    precio: "20€",
    talla: "M",
    color: "Negro"
  },
  {
    nombre:"Camisa Rosa",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverBlancaLogo.png",
    precio: "60€",
    talla: "XL",
    color: "Rosa"
  },
  {
    nombre:"Camisa Rosa",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverBlanca.png",
    precio: "60€",
    talla: "XL",
    color: "Rosa"
  },
  {
    nombre:"Camisa Blanca",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverNegra.png",
    precio: "30€",
    talla: "XXL",
    color: "Blanca"
  },
  {
    nombre:"Camisa Azul Marino",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverBlancaPico.png",
    precio: "40€",
    talla: "S",
    color: "Azul Marino"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverCuelloPicoNegra.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverLargaNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverLargaNegroLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverTirantesHombroNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverTirantesHombroNegroLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverTirantesNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverTirantesNegroLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/sudaderaNeverNegraCapucha.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/sudaderaNeverNegraCapuchaLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/sudaderaNeverBlancaCapucha.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/sudaderaNeverBlancaCapuchaLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/poloNeverNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNeverNegra.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisetaNeverLargaCuelloAltoNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/pantalonesNeverCargoLargosNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/pantalonesNeverChandalNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/pantalonesNeverVaquerosNegroLogo.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/blusaNeverNegra.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/vestidoNeverNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/faldaNeverVaqueraNegro.png",
    precio: "50€",
    talla: "L",
    color: "Gris"
  }
];

  constructor() { 
    console.log("Servicio listo para utilizar");
  }

  getPrenda():Prenda[]{
    return this.prenda;
  }

}

export interface Prenda{
  nombre:string;
  info:string;
  img:string;
  precio:string;
  talla:string;
  color:string;
}