import { Directive, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Directive({
  selector: '[appGraphicsObjects],[graphic]'
})
export class GraphicsObjectsDirective {

  @Input() graphic: any;
  private graphicInstance: any;

  constructor(
    private element: ElementRef
  ) {
  }

  ngOnDestroy(): void {
    this.dispose(this.graphicInstance);
  }

  ngOnChanges(changes: any): void {
    if ('graphic' in changes) {
      // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
      console.log("en uso pa");
      //this.tabla();


    }
  }

  private tabla(){
    const totalDuration = 20000;
    const delayBetweenPoints = totalDuration / 1000;
    const previousY = (ctx: any) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart
            .getDatasetMeta(ctx.datasetIndex)
            .data[ctx.index - 1].getProps(['y'], true).y;

    this.graphicInstance = new Chart(this.element.nativeElement,{
      type: 'line',
      ... this.graphic,
      options: {
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

  }

  private dispose(chart:any){
    if(this.graphicInstance){
      this.graphicInstance.remove();
      //this.graphicInstance = null;
    }
  }

}
