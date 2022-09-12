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





  public destroyGraphicChart(){

  }

  public updateGraphic(){

  }

  constructor() {

  }

  ngOnInit(): void {
    var myChart =  new Chart('tabla',{
      type: 'line',
      data: {
        datasets: [{
          data: tangente(this.numero),
        }],
        labels: grados(this.numero)
      },
      options: {
        responsive: true,
      }
    });
  }

  ngOnChanges(){

  }


}


