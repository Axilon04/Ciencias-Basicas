import { Component, Input, OnInit } from '@angular/core';
import { CalcularService } from '../../../services/calcular.service';
import { GraphicsService } from 'src/app/services/graphics.service';

@Component({
  selector: 'app-masa-resorte',
  templateUrl: './masa-resorte.component.html',
  styleUrls: ['./masa-resorte.component.css']
})
export class MasaResorteComponent implements OnInit {

  @Input() amplitud:number | any = 100 ;
  @Input() w:number | any = 6.28 ;
  @Input() fase:number | any = 0.58 ;
  @Input() time:number | any = 1 ;

  constructor(
    private calcularService: CalcularService,
    private graphics: GraphicsService,
  ) { }

  ngOnInit(): void {
  }

  public animationsConfig: any
  private timeConfig = 5000;


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

  // ES LA ENCARGADA DE EJECUTAR LA LOGICA DE MANERA ASINCRONA PARA EVITAR CUALQUIER TIPO DE ERROR A FUTURO
  public async executeOscilation(){


    const element = document.querySelector('#graphic') as HTMLCanvasElement;
    const elementContainer = document.querySelector('#contenedor-graphics') as HTMLCanvasElement;

      this.graphics.updateGraphicChart(elementContainer,element)

      await this.calcularService.endOperaion()
        .then( () => {
          this.calcularService.starOperation(this.amplitud,this.w,this.fase,this.time)

          this.graphics.tabla({
            element: document.querySelector('#graphic') as HTMLCanvasElement,
            ejeycoseno: this.calcularService.getEjeYCoseno(),
            ejeyseno: 0,
            ejex: this.calcularService.getEjeX(),
            time: this.timeConfig,
            longEje: this.calcularService.getEjeX().length,
          },{
            labelVistaPoint: 'A cos( Wt + φ )',
            borderColor: 'black',
            borderWidth: 3,
            tension: 0.2,
            pointRadius: 0,
            titleText: 'GRAFICA DE LA OSCILACION ',
          }).then((resolve)=>{
            console.log(resolve)
            this.animationsConfig = {
              translateY: this.calcularService.getDataAnimation(),
              duration: this.timeConfig,
              easing: 'linear',
            }
          })
        }).catch(()=> console.log('Error Fatal'))


  }


}

/*

// CREACION, PERSONALIZACION Y MANEJO DE LAS GRAFICAS
  public tabla(dataConfig: graphic, graphicConfig: graphicEjeyCustom){

    return new Promise((resolve,reject)=>{
      const totalDuration = dataConfig.time;
      const delayBetweenPoints = totalDuration / dataConfig.longEje;
      const previousY = (ctx: any) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(['y'], true).y;

      let graphic = new Chart( dataConfig.element ,{
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
            }],
            // EJE X
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

*/
