import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Calculo1Component } from './components/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';

import { GraphicLinealComponent } from './components/graphic-lineal/graphic-lineal.component';

const routes: Routes = [
  { path: '',
  component:HomeComponent,

  children: [
    {
      path: 'calculo1',
      component:Calculo1Component
    },
    {
      path: 'graphicLine',
      component:GraphicLinealComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
