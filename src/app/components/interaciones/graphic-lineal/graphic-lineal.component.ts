import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { amplitud,seno2 } from './calcular';

@Component({
  selector: 'app-graphic-lineal',
  templateUrl: './graphic-lineal.component.html',
  styleUrls: ['./graphic-lineal.component.css']
})
export class GraphicLinealComponent implements OnInit {

  @Input() numero:number | any;
  @Input() tiempoF:number | any;
  @Input() tiempoR:number | any;
  @Input() omega:number | any;
  @Input() fi:number | any;
  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tabla') as HTMLCanvasElement;
    return element;
  }

  public grafica = () => {
    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    const totalDuration = 10000;
      const delayBetweenPoints = totalDuration / 142;
      const previousY = (ctx: any) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(['y'], true).y;
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
          animations: {
            x: {
              type: 'number',
              easing: 'easeInCubic',
              duration: delayBetweenPoints,
              from: NaN, // the point is initially skipped
              delay(ctx: any) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                  return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
              },
            },
            y: {
              type: 'number',
              easing: 'easeInCubic',
              duration: delayBetweenPoints,
              from: previousY,
              delay(ctx: any) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                  return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
              },
            },
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
