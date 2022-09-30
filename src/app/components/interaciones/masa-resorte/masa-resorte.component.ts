import { Component, Input, OnInit } from '@angular/core';
import { CalcularService } from '../../../services/calcular.service'

@Component({
  selector: 'app-masa-resorte',
  templateUrl: './masa-resorte.component.html',
  styleUrls: ['./masa-resorte.component.css']
})
export class MasaResorteComponent implements OnInit {

  @Input() amplitud:number | any = 100 ;
  @Input() w:number | any = 0.1 ;
  @Input() fase:number | any = 1.570 ;
  @Input() time:number | any = 1000 ;

  constructor(
    private calcularService: CalcularService
  ) { }

  ngOnInit(): void {
    //this.graphicOscilacion();
  }

  public animationsConfig: any
  public graphicConfig: any

  public graphicOscilacion(){
    this.graphicConfig = {
      data: {
        datasets: [{
          //EJE Y
            data: this.calcularService.positionDataY(this.amplitud,this.w,this.fase,this.time),
          }],
          // EJE X
          labels: this.calcularService.positionDataX(this.time),
      }
    }

  }

  public animationOscilacion(){
    if(this.amplitud.toString().length !=  0 &&
       this.w.toString().length != 0 &&
       this.fase.toString().length != 0 &&
       this.time.toString().length != 0){


        this.start().then(resolve => {
          console.log("correct");
        }).catch(rejects => {
          console.log("incorrect");
        });


    }else{
      alert('Rellene todas las casillas por favor.');
    }
  }

  private start(){
    let dataY;
    return new Promise((resolve,reject) => {
      
      this.updateGraphicChart();
      this.graphicOscilacion();

      dataY = this.calcularService.positionDataY(this.amplitud,this.w,this.fase,this.time);
      this.animationsConfig = {
        translateY: dataY,
        duration: 20000,
        easing: 'linear',
      };
    })
  }

  //public element = document.querySelector('#graphic') as HTMLCanvasElement;

  public updateGraphicChart(){
    // ELIMINACION DEL CANVAS ANTERIOR PARA LA INTEGRACION DEL NUEVO CON DATOS ACTUALIZADOS
    this.destroyGraphicChart();

    // CREACION DE ELEMENTO SECTION PARA LA INTEGRACION/RECUPERACION DE LA GRAFICA (ELIMINE EL CANVAS Y CREE OTRO)
    let element = document.querySelector('#contenedor-graphics') as HTMLCanvasElement;
    element.innerHTML = ' <canvas id="graphic" class="graphicOscilation" [graphic]="graphicConfig" ></canvas> ';

  }

  public destroyGraphicChart(){
    // REMOVIENDO EL CANVAS
    const element = document.querySelector('#graphic') as HTMLCanvasElement;
    element.remove();
  }


}
