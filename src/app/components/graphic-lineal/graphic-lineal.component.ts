import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';

import { ChartConfiguration, ChartOptions, ChartType, Chart } from "chart.js";

import { grados,tangente} from './calcular';

@Component({
  selector: 'app-graphic-lineal',
  templateUrl: './graphic-lineal.component.html',
  styleUrls: ['./graphic-lineal.component.css']
})
export class GraphicLinealComponent implements OnInit, OnChanges {

  @ViewChild('tablet') table: ElementRef | undefined;
  @Input() numero:number = 360;

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

  public grafica(): void {
    const elementparrafo: any = document.querySelector('#tabla') as HTMLCanvasElement;
    console.log(elementparrafo);

  }

  constructor() {

  }

  ngOnInit(): void {
    console.log("init", this.numero);
    this.grafica();
  }

  ngOnChanges(){

  }


}
