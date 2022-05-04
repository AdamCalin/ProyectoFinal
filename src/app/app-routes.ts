import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/contenido/home/home.component";
import { TiendaComponent } from "./components/contenido/tienda/tienda.component";
import { PedidosComponent } from './components/contenido/pedidos/pedidos.component';
import { GestionComponent } from './components/contenido/gestion/gestion.component';
import { PedidosGestionComponent } from './components/contenido/gestion/pedidos-gestion/pedidos-gestion.component';
import { PedidosStockComponent } from './components/contenido/gestion/pedidos-stock/pedidos-stock.component';
import { SeguimientoComponent } from './components/contenido/pedidos/seguimiento/seguimiento.component';
import { RealizadosLlegadosComponent } from "./components/contenido/pedidos/realizados-llegados/realizados-llegados.component";


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'pedidos', component: PedidosComponent,
        children: [
            {path: 'seguimiento', component: SeguimientoComponent},
            {path: 'realizados-llegados', component: RealizadosLlegadosComponent},
            {path: '**', pathMatch: 'full', redirectTo: 'seguimiento'}
        ]},
    {path: 'gestion', component: GestionComponent,
        children: [
            {path: 'pedidos-gestion', component: PedidosGestionComponent},
            {path: 'pedidos-stock', component: PedidosStockComponent},
            {path: '**', pathMatch: 'full', redirectTo: 'pedidos-gestion'}
        ]},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);