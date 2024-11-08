import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { HomeComponent } from './components/home/home.component';
import { PadreCocheComponent } from './components/padre-coche/padre-coche.component';
import { PadreDeportesComponent } from './components/padre-deportes/padre-deportes.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ListaProductosComponent },
  { path: 'padrecoche', component: PadreCocheComponent },
  { path: 'padredeportes', component: PadreDeportesComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
