import { Component, Input, OnInit } from '@angular/core';
import { grados, seno } from '../graphic-lineal/calcular';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-seno',
  templateUrl: './seno.component.html',
  styleUrls: ['./seno.component.css'],
})
export class SenoComponent implements OnInit {
  @Input() number: number | any = 360;

  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tablaSeno') as HTMLCanvasElement;
    return element;
  };

  public grafica = () => {
    return new Promise((resolve, reject) => {
      const totalDuration = 10000;
      const delayBetweenPoints = totalDuration / 142;
      const previousY = (ctx: any) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(['y'], true).y;

      // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
      var pruebas = new Chart(this.tableElement(), {
        type: 'line',
        data: {
          datasets: [
            {
              //EJE Y
              data: seno(this.number),
            },
          ],
          // EJE X
          labels: grados(this.number),
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
          },
        },
      });
    });
  };

  public updateGraphicChart() {
    // ELIMINACION DEL CANVAS ANTERIOR PARA LA INTEGRACION DEL NUEVO CON DATOS ACTUALIZADOS
    this.destroyGraphicChart();

    // CREACION DE ELEMENTO SECTION PARA LA INTEGRACION/RECUPERACION DE LA GRAFICA (ELIMINE EL CANVAS Y CREE OTRO)
    const sectionCanvas = document.querySelector(
      '#contenedor-grafica-seno'
    ) as HTMLCanvasElement;
    const canvas = document.createElement('canvas');
    canvas.id = 'tablaSeno';
    sectionCanvas.appendChild(canvas);

    // CREACION DE LA NUEVA GRAFICA CON LOS NUEVOS DATOS
    this.graphic();
  }

  public destroyGraphicChart() {
    // REMOVIENDO EL CANVAS
    this.tableElement().remove();
  }

  public graphic(): void {
    // INICIALIZANDO GRAFICA PREDETERMINADA
    this.grafica().then( resolve => {
      console.log('quest complete graphic.')
    }).catch( reject => {
      console.log('quest incomplete graphic.')
    });
  }

  constructor() {}

  ngOnInit(): void {
    this.graphic()
  }
}
