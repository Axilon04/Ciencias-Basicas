import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminRoutingModule } from './admin-routing.module';
import { AppComponent } from './app.component';
import { Calculo1Component } from './components/calculo1/calculo1.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Calculo1Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AdminModule { }
