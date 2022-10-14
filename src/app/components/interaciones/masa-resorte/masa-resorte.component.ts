import { Component, Input, OnInit } from '@angular/core';
import { CalcularService } from '../../../services/calcular.service';
import { Chart } from "chart.js";

@Component({
  selector: 'app-masa-resorte',
  templateUrl: './masa-resorte.component.html',
  styleUrls: ['./masa-resorte.component.css']
})
export class MasaResorteComponent implements OnInit {

  @Input() amplitud:number | any = 100 ;
  @Input() w:number | any = 0.2 ;
  @Input() fase:number | any = 1.570 ;
  @Input() time:number | any = 500 ;

  constructor(
    private calcularService: CalcularService,
  ) { }

  ngOnInit(): void {
  }

  public animationsConfig: any
  private timeConfig = 20000;

  // OBTENEMOS EL ELEMENTO CANVAS PARA IDENTIFICAR LA RABLA
  private tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#graphic') as HTMLCanvasElement;
    return element;
  }

  // VALIDAMOS LOS DATOS Y EJECUTAMOS LA ANIMACION JUNTO CON LA GRAFICA
  public animationOscilacion(){
    if(this.amplitud.toString().length !=  0 &&
       this.w.toString().length != 0 &&
       this.fase.toString().length != 0 &&
       this.time.toString().length != 0){

      this.executeOscilation();

    }else{
      alert('Rellene todas las casillas por favor.');
    }
  }

  // OBTENEMOS LA ARRAY QUE CONTENDRA LAS POSICIONES DEL EJE X y Y
  private graphicOscilacion(ejeX:any, ejeY:any ){
    let graphicConfig = {
      data: {
        datasets: [{
          //EJE Y
            label: 'A cos( Wt + φ )',
            data: ejeY,
            backgroundColor: 'rbga(255.99.132)', //no idea pero no eliminar
            borderColor: 'black', // color de la linea
            borderWidth: 3, // tamano de la linea
            tension: 0.2, // flexibilidad de la linea
            pointRadius: 0, // tamano del circulo
            hoverRadius: 10, // hover del circulo

          }],
          // EJE X
          labels: ejeX,
      }
    }
    return graphicConfig;
  }

  // ES LA ENCARGADA DE EJECUTAR LA LOGICA DE MANERA ASINCRONA PARA EVITAR CUALQUIER TIPO DE ERROR A FUTURO
  public async executeOscilation(){

      await this.calcularService.endOperaion();
      await this.updateGraphicChart();

      await this.calcularService.starOperation(this.amplitud,this.w,this.fase,this.time);
      await this.tabla(
        this.calcularService.getEjeY(),
        this.calcularService.getEjeX(),
        this.timeConfig,
        this.calcularService.getEjeY().length
      );

      this.animationsConfig = {
        translateY: this.calcularService.getDataAnimation(),
        duration: this.timeConfig,
        delay: 190,
        easing: 'linear',
      };
  }

  // DESTRUYE Y VUELVE A CREAR EL CANVAS PARA AGREGAR OTRA GRAFICA
  private updateGraphicChart(){
    // ELIMINACION DEL CANVAS ANTERIOR PARA LA INTEGRACION DEL NUEVO CON DATOS ACTUALIZADOS
    this.destroyGraphicChart();

    // CREACION DE ELEMENTO SECTION PARA LA INTEGRACION/RECUPERACION DE LA GRAFICA (ELIMINE EL CANVAS Y CREE OTRO)
    let element = document.querySelector('#contenedor-graphics') as HTMLCanvasElement;
    element.innerHTML = ' <canvas id="graphic" class="graphicOscilation"></canvas> ';

  }

  // DESTRUYE EL OBJETO CANVAS
  private destroyGraphicChart(){
    // REMOVIENDO EL CANVAS
    const element = document.querySelector('#graphic') as HTMLCanvasElement;
    element.remove();
  }

  // ENCARGADA DE LA LOGICA DE LA TABLA
  private tabla(ejeY: number[],ejeX: number[], time:number, longData:number){

    const totalDuration = time;
    const delayBetweenPoints = totalDuration / longData;
    const previousY = (ctx: any) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
            .getDatasetMeta(ctx.datasetIndex)
            .data[ctx.index - 1].getProps(['y'], true).y;

    let graphic = new Chart(this.tableElement(),{
      type: 'line',
      ... this.graphicOscilacion(ejeX,ejeY),
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
              text: 'GRAFICA DE LA OSCILACION '
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
    return graphic;
  }

}
