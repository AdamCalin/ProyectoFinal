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
import { HeaderPedidosComponent } from './components/contenido/pedidos/header-pedidos/header-pedidos.component';
import { GestionComponent } from './components/contenido/gestion/gestion.component';
import { HeaderGestionComponent } from './components/contenido/gestion/header-gestion/header-gestion.component';
import { MenuTiendaComponent } from './components/contenido/tienda/menu-tienda/menu-tienda.component';
import { PedidosGestionComponent } from './components/contenido/gestion/pedidos-gestion/pedidos-gestion.component';
import { PedidosStockComponent } from './components/contenido/gestion/pedidos-stock/pedidos-stock.component';
import { SeguimientoComponent } from './components/contenido/pedidos/seguimiento/seguimiento.component';
import { HomeComponent } from './components/contenido/home/home.component';
import { ContenidoTiendaComponent } from './components/contenido/tienda/contenido-tienda/contenido-tienda.component';
import { RealizadosLlegadosComponent } from './components/contenido/pedidos/realizados-llegados/realizados-llegados.component';

//ANIMACIONES
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//modulos
import { SeasonComponent } from './components/contenido/home/season/season.component';
import { ModalModule } from './shared/components/modal/modal.module';
import { ModalModuleArticulo } from './shared/components/modal-anadir-articulo/modalAnadir.module';
import { ModalModuleCarrito } from './shared/components/modal-carrito/modalCarrito.module';
import { ModalModulePerfil } from './shared/components/modal-perfil/modalPerfil.module';
import {ModalAnadirUsuario} from './shared/components/modal-anadir-usuario/modalUsuario.module';
import {ModalEditarUsuario} from './shared/components/modal-editar-usuario/modalEditar.module';
//servicios
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//angular material
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

//ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers, metaReducers} from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { GestionUsuariosComponent } from './components/contenido/gestion/gestion-usuarios/gestion-usuarios.component';

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
    HomeComponent,
    ContenidoTiendaComponent,
    RealizadosLlegadosComponent,
    SeasonComponent,
    GestionUsuariosComponent
  ],
  imports: [
    //modulos
    ModalModule,
    ModalModuleArticulo,
    ModalModuleCarrito,
    ModalModulePerfil,
    ModalAnadirUsuario,
    ModalEditarUsuario,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //angularmaterial
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    //redux
    StoreModule.forRoot( appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
