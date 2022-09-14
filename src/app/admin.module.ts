import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms'
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

import {MatInputModule} from '@angular/material/input';

import { AdminRoutingModule } from './admin-routing.module';
import { AppComponent } from './app.component';
import { Calculo1Component } from './components/asignaturas/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';
import { GraphicLinealComponent } from './components/interaciones/graphic-lineal/graphic-lineal.component';

//  LIBRERIAS PARA LA GRAFIACIONES DE LAS INTERACIONES
import { NgChartsModule } from 'ng2-charts';
import { InteracionesComponent } from './components/interaciones/interaciones.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';

@NgModule({
  declarations: [
    AppComponent,
    Calculo1Component,
    HomeComponent,
    GraphicLinealComponent,
    InteracionesComponent,
    AsignaturasComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    NgChartsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AdminModule { }
