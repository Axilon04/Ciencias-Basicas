import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminRoutingModule } from './admin-routing.module';
import { AppComponent } from './app.component';
import { Calculo1Component } from './components/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';
import { GraphicLinealComponent } from './components/graphic-lineal/graphic-lineal.component';

//  LIBRERIAS PARA LA GRAFIACIONES DE LAS INTERACIONES
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    Calculo1Component,
    HomeComponent,
    GraphicLinealComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AdminModule { }
