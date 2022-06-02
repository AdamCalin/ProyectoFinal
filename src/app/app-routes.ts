import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from "./components/contenido/home/home.component";
import { TiendaComponent } from "./components/contenido/tienda/tienda.component";
import { PedidosComponent } from './components/contenido/pedidos/pedidos.component';
import { GestionComponent } from './components/contenido/gestion/gestion.component';
import { PedidosGestionComponent } from './components/contenido/gestion/pedidos-gestion/pedidos-gestion.component';
import { PedidosStockComponent } from './components/contenido/gestion/pedidos-stock/pedidos-stock.component';
import { SeguimientoComponent } from './components/contenido/pedidos/seguimiento/seguimiento.component';
import { RealizadosLlegadosComponent } from "./components/contenido/pedidos/realizados-llegados/realizados-llegados.component";
import { ModalPerfilComponent } from './shared/components/modal-perfil/modal-perfil.component';
import { GestionUsuariosComponent } from './components/contenido/gestion/gestion-usuarios/gestion-usuarios.component';
import { AuthGuard } from "./shared/guards/auth.guard";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent, },
    {path: 'tienda', component: TiendaComponent},
    {path: 'pedidos', component: PedidosComponent,
        children: [
            {path: 'seguimiento', component: SeguimientoComponent, canActivate:[AuthGuard]},
            {path: 'realizados-llegados', component: RealizadosLlegadosComponent, canActivate:[AuthGuard]},
            {path: '**', pathMatch: 'full', redirectTo: 'seguimiento'}
        ], canActivate:[AuthGuard]},
    {path: 'gestion', component: GestionComponent,
        children: [
            {path: 'pedidos-gestion', component: PedidosGestionComponent, canActivate:[AuthGuard]},
            {path: 'pedidos-stock', component: PedidosStockComponent, canActivate:[AuthGuard]},
            {path: 'usuarios-gestion', component: GestionUsuariosComponent, canActivate:[AuthGuard]},
            {path: '**', pathMatch: 'full', redirectTo: 'pedidos-gestion'}
        ], canActivate:[AuthGuard]},
    {path: 'perfil', component:ModalPerfilComponent,
        children: [
            {path: 'pedidos', component:PedidosComponent, canActivate:[AuthGuard]}
        ], canActivate:[AuthGuard]},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);