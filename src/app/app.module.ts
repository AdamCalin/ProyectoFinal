import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from './app-routes';
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TiendaComponent } from './components/contenido/tienda/tienda.component';
import { HeaderTiendaComponent } from './components/contenido/tienda/header-tienda/header-tienda.component';
import { PedidosComponent } from './components/contenido/pedidos/pedidos.component';
import { HeaderPedidosComponent } from './components/contenido/Pedidos/header-pedidos/header-pedidos.component';
import { GestionComponent } from './components/contenido/gestion/gestion.component';
import { HeaderGestionComponent } from './components/contenido/Gestion/header-gestion/header-gestion.component';
import { MenuTiendaComponent } from './components/contenido/tienda/menu-tienda/menu-tienda.component';
import { PedidosGestionComponent } from './components/contenido/gestion/pedidos-gestion/pedidos-gestion.component';
import { PedidosStockComponent } from './components/contenido/gestion/pedidos-stock/pedidos-stock.component';
import { SeguimientoComponent } from './components/contenido/pedidos/seguimiento/seguimiento.component';
import { RealizadosLlegadosComponent } from './components/contenido/pedidos/realizados-llegados/realizados-llegados.component';
import { HomeComponent } from './components/contenido/home/home.component';



//servicios

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    TiendaComponent,
    HeaderTiendaComponent,
    PedidosComponent,
    HeaderPedidosComponent,
    GestionComponent,
    HeaderGestionComponent,
    MenuTiendaComponent,
    PedidosGestionComponent,
    PedidosStockComponent,
    SeguimientoComponent,
    RealizadosLlegadosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
