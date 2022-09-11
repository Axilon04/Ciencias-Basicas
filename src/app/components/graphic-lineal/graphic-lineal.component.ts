import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

import { grados,tangente } from './calcular';

@Component({
  selector: 'app-graphic-lineal',
  templateUrl: './graphic-lineal.component.html',
  styleUrls: ['./graphic-lineal.component.css']
})
export class GraphicLinealComponent implements OnInit, OnChanges {

  @Input() numero:number = 0;

  lineChartData: ChartConfiguration<'line'>['data'] = {
    // EJE X
    labels: grados(this.numero),
    datasets: [
      {
        // EJE Y
        data: tangente(this.numero),
        label: 'FUNCION DE LA TANGENTE',
        fill: false,
        tension: 0.1,
        borderColor: 'red',
        backgroundColor: 'yellow'
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = true;

  constructor() {

  }

  ngOnInit(): void {
    console.log("init", this.numero);
  }

  ngOnChanges(){
    console.log("update", this.numero);
  }


}
