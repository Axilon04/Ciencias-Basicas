import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculo1Component } from './components/asignaturas/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';
import { GraphicLinealComponent } from './components/interaciones/graphic-lineal/graphic-lineal.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { InteracionesComponent } from './components/interaciones/interaciones.component';
import { TagencialComponent } from './components/interaciones/tagencial/tagencial.component';
import { SenoComponent } from './components/interaciones/seno/seno.component';
import { MasaResorteComponent } from './components/interaciones/masa-resorte/masa-resorte.component';
import { AboutComponent } from './components/about/about.component';
import { Calculo2Component } from './components/asignaturas/calculo2/calculo2.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
const routes: Routes = [
  { path: '',
  component:HomeComponent,

  children: [
  ]
  },
  {
    path: 'Asignaturas',
    component:AsignaturasComponent,
    children:[
      {
        path: 'Calculo-I',
        component:Calculo1Component
      },
      {
        path: 'Calculo-II',
        component:Calculo2Component
      }
    ]
  },{
    path: 'Interaciones',
    component:InteracionesComponent,
  },

  {
    path: 'graphicLine',
    component:GraphicLinealComponent
  },
  {
    path: 'tagencialLine',
    component:TagencialComponent
  },
  {
    path: 'senoLine',
    component:SenoComponent
  },
  {
    path: 'masaResorteLine',
    component:MasaResorteComponent
  },
  {
    path: 'About',
    component:AboutComponent
  },
  {
    path: 'Laboratorio',
    component: LaboratorioComponent
  },
  {
    path: 'profesoresComponent',
    component: ProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
