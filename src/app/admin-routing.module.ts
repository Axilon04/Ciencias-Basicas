import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Calculo1Component } from './components/asignaturas/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';

import { GraphicLinealComponent } from './components/interaciones/graphic-lineal/graphic-lineal.component';
import { AppComponent } from './app.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { InteracionesComponent } from './components/interaciones/interaciones.component';

const routes: Routes = [
  { path: '',
  component:HomeComponent,

  children: [
  ]},
  {
    path: 'Asignaturas',
    component:AsignaturasComponent,

  },{
    path: 'Interaciones',
    component:InteracionesComponent,
  },
  {
    path: 'calculo1',
    component:Calculo1Component
  },
  {
    path: 'graphicLine',
    component:GraphicLinealComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
