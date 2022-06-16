import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { trigger, animate, transition, style, state } from '@angular/animations';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockService } from 'src/app/services/stock/stock.service';


@Component({
  selector: 'app-pedidos-gestion',
  templateUrl: './pedidos-gestion.component.html',
  styleUrls: ['./pedidos-gestion.component.css'],
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
export class PedidosGestionComponent implements AfterViewInit {

  displayedColumns: string[] = ['descripcion', 'talla', 'color', 'cantidad', 'precio', 'edit'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //variables from crear nuevo pedidos
  showModal: boolean = false;

  fadeOut: boolean = false;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  idUsuario : any;

  @Input() id = '';

  ngAfterViewInit() {
    this.datosPedidos();
    this.dataSource.paginator = this.paginator;
  }
  @Input() position: string = 'right'; 

  
  public mostrar: boolean = true;
  formAnadirPedido: FormGroup ;


   constructor(private formBuilder : FormBuilder, private store: Store<AppState>, private servicioStock: StockService) {
      this.formAnadirPedido = this.formBuilder.group({
        descripcion: new FormControl('', Validators.required),
      talla : new FormControl('', Validators.required),
      color : new FormControl('', Validators.required)
    })
     }

    setClose($event: any) {
      this.showModal = false;
    }

  datosPedidos(){
    this.servicioStock.getVistaStock().subscribe( (articulos: any) => {
      console.log(articulos);
      this.dataSource.data = articulos;
      
    })
  }

  anadirPedido(){
    console.log('Añadir Pedido');
    
  }
  actualizarDatos($event : any){
    if($event == true){
      this.datosPedidos();
    }
  }

  filter(event : any){
    let filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toUpperCase();
}

}

export interface PeriodicElement {
  usuario: string;
  email: string;
  perfil: string;
}

let  ELEMENT_DATA: PeriodicElement[] = [
]

