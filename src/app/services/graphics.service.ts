import { Injectable } from '@angular/core';
import { Chart } from "chart.js";
import { graphic, graphicEjeyCustom } from './modeloData';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor() { }

  // CREACION, PERSONALIZACION Y MANEJO DE LAS GRAFICAS
  public tabla(dataConfig:graphic, graphicConfig: graphicEjeyCustom){
    return new Promise((resolve,reject)=>{
      const totalDuration = dataConfig.time;
      const delayBetweenPoints = totalDuration / dataConfig.longEje;
      const previousY = (ctx: any) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(['y'], true).y;

      var graphic = new Chart(dataConfig.element ,{
        type: 'line',
        data: {
          datasets: [{
            //EJE Y
            label: graphicConfig.labelVistaPoint,
            data: dataConfig.ejeycoseno,
            backgroundColor: 'rbga(255.99.132)', //no idea pero no eliminar
            borderColor: graphicConfig.borderColor, // color de la linea
            borderWidth: graphicConfig.borderWidth, // tamano de la linea
            tension: graphicConfig.tension, // flexibilidad de la linea
            pointRadius: graphicConfig.pointRadius, // tamano del circulo
          },
          {
            label: 'eje central',
            data: dataConfig.ejex,
            backgroundColor: 'rbga(0.0.0.8)', //no idea pero no eliminar
            borderColor: 'rgba(176, 175, 175, 1)', // color de la linea
            borderWidth: graphicConfig.borderWidth, // tamano de la linea
            tension: graphicConfig.tension, // flexibilidad de la linea
            pointRadius: graphicConfig.pointRadius, // tamano del circulo
          }],
          labels: dataConfig.ejex,
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              }
            }
          },
          plugins: {
            title: {
                display: true,
                text: graphicConfig.titleText,
            },
            tooltip: {
              displayColors: false,
              yAlign: 'bottom',
              backgroundColor: 'red',
            }
          },
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
      resolve(graphic) ;
    })

  }

  public updateGraphicChart(contendor:HTMLCanvasElement,grafica:HTMLCanvasElement){
    grafica.remove();
    contendor.innerHTML = ' <canvas id="graphic" class="graphicOscilation"></canvas> ';
    console.log('update Chart')
  }

}
