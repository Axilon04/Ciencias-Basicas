import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { amplitud,seno2 } from './calcular';

@Component({
  selector: 'app-graphic-lineal',
  templateUrl: './graphic-lineal.component.html',
  styleUrls: ['./graphic-lineal.component.css']
})
export class GraphicLinealComponent implements OnInit {

  @Input() numero:number | any = 12.5;
  @Input() tiempoF:number | any = 3;
  @Input() tiempoR:number | any = 0.01;
  @Input() omega:number | any = 4;
  @Input() fi:number | any = 0.7;
  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tabla') as HTMLCanvasElement;
    return element;
  }


  public grafica = () => {
    let delayed: any;
    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    var pruebas = new Chart(this.tableElement() ,{
      type: 'line',
      data: {
        datasets: [{
          //EJE Y
            data: seno2(this.tiempoF,this.tiempoR,this.numero,this.omega,this.fi),
          }],
          // EJE X
          labels: amplitud(this.tiempoF,this.tiempoR),
        },
        options: {
          // responsive: true,
          maintainAspectRatio: false,
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 30 + context.datasetIndex * 1000;
              }
              return delay;
            },
          },
          scales: {
            y: {
              min: -20,
              max: 20,
            }
          }
        }
    });

    return pruebas;

  }

  public updateGraphicChart(){
    // ELIMINACION DEL CANVAS ANTERIOR PARA LA INTEGRACION DEL NUEVO CON DATOS ACTUALIZADOS
    this.destroyGraphicChart();

    // CREACION DE ELEMENTO SECTION PARA LA INTEGRACION/RECUPERACION DE LA GRAFICA (ELIMINE EL CANVAS Y CREE OTRO)
    const sectionCanvas = document.querySelector('#contenedor-grafica-tangente') as HTMLCanvasElement;
    const canvas =  document.createElement('canvas');
    canvas.id = 'tabla';
    sectionCanvas.appendChild(canvas)

    // CREACION DE LA NUEVA GRAFICA CON LOS NUEVOS DATOS
    this.grafica();

  }

  public destroyGraphicChart(){
    // REMOVIENDO EL CANVAS
    this.tableElement().remove();
  }

  public graphic(): void{
    // INICIALIZANDO GRAFICA PREDETERMINADA
    this.grafica();

  }

  constructor() {
  }

  ngOnInit(): void {
    this.grafica();

  }
}
