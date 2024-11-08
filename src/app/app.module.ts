import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingProvider, routing } from './app.routing';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HijoCocheComponent } from './components/hijo-coche/hijo-coche.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';
import { HijoDeporteComponent } from './components/hijo-deporte/hijo-deporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    MenuComponent,
    HomeComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
