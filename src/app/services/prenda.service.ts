import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PrendaService {

private prenda:Prenda[] = [

  {
    nombre:"Camisa Negra",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNegraHombre.jpg",
    precio: "20€",
    talla: "M",
    color: "Negro"
  },
  {
    nombre:"Camisa Blanca",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNegraHombre.jpg",
    precio: "30€",
    talla: "XXL",
    color: "Blanca"
  },
  {
    nombre:"Camisa Rosa",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNegraHombre.jpg",
    precio: "60€",
    talla: "XL",
    color: "Rosa"
  },
  {
    nombre:"Camisa Azul Marino",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNegraHombre.jpg",
    precio: "40€",
    talla: "S",
    color: "Azul Marino"
  },
  {
    nombre:"Camisa Gris",
    info: "Camisa Negra para vestir elegante, con o sin americana",
    img: "assets/images/camisaNegraHombre.jpg",
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