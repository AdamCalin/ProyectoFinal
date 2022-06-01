import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import { ArticulosService } from 'src/app/services/articulos/articulos.service';

@Component({
  selector: 'app-modal-anadir-articulo',
  templateUrl: './modal-anadir-articulo.component.html',
  styleUrls: ['./modal-anadir-articulo.component.css']
})
export class ModalAnadirArticuloComponent implements OnInit {

 
  @Input() position: string = 'right'; 

  @Output() open = new EventEmitter<boolean>();
  
  public mostrar: boolean = true;
  formAnadirArticulo: FormGroup ;

  laImagen!: Observable<any>;
  base64code!:any;

   constructor(private formBuilder : FormBuilder,
    private articulosService : ArticulosService) {
      this.formAnadirArticulo = this.formBuilder.group({
        descripcion: new FormControl('', Validators.required),
      fabricante : new FormControl('', Validators.required),
      peso : new FormControl(''),
      largo : new FormControl(''),
      ancho : new FormControl(''),
      alto : new FormControl(''),
      precio : new FormControl('', Validators.required),
      talla : new FormControl('', Validators.required),
      color : new FormControl('', Validators.required),
      n_registro : new FormControl(''),
      imagen : new FormControl(''),
      sexo : new FormControl('', Validators.required)
    })
     }

  // cerrer modulo
  setClose() {
    let value = false;
    this.open.emit(value);
  }
  ngOnInit(){
    
  }


  base64($event: Event){
  const target = $event.target as HTMLInputElement;

  const file :File = (target.files as FileList)[0];
    
    this.convertToBase64(file)
  }

  convertToBase64(file : File){
      const observable = new Observable((subscriber : Subscriber<any>) =>{
        this.readFile(file, subscriber);
      });
      
      observable.subscribe((d) => {
        this.laImagen = d;
        this.base64code = d;
        this.formAnadirArticulo.value.imagen = d;  
      })

  }

  readFile(file:File, subscriber:Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);
    filereader.onload = () =>{
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror = () =>{
        subscriber.error();
        subscriber.complete();
    }
  }
  

  // formulario añadir articulo
  anadirArticulo(){
    
    //console.log(this.formAnadirArticulo.value.imagen);
    this.articulosService.anadirArticulos(this.formAnadirArticulo.value).subscribe( res => {
      console.log(res);
    });
  }
}
