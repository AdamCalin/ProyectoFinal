import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidosService } from '../../../../services/pedidos/pedidos.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  formCodigo: FormGroup ;
  pedidoCodigo:any;
  estado:any;

  constructor(private servicioPedidos: PedidosService, private formBuilder : FormBuilder) {
    this.formCodigo = this.formBuilder.group({
      codigo: new FormControl('', Validators.required),
  })
   }

  ngOnInit() {

  
  }

  getPedidoCodigo(){
    this.servicioPedidos.getPedidoCodigo(this.formCodigo.value.codigo).subscribe( (res:any) =>{
      console.log(res);
      this.pedidoCodigo = res;
      this.estado = this.pedidoCodigo[0].estado;
      console.log(this.estado);

    })
  }

}
