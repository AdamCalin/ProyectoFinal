import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/contenido/home/home.component";
import { TiendaComponent } from "./components/contenido/tienda/tienda.component";
import { PedidosComponent } from './components/contenido/pedidos/pedidos.component';
import { GestionComponent } from './components/contenido/gestion/gestion.component';



const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'gestion', component: GestionComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);