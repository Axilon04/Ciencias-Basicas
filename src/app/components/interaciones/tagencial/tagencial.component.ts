import { Component, Input, OnInit } from '@angular/core';

import { Chart } from "chart.js";
import { gradosT,tangente} from '../graphic-lineal/calcular';

@Component({
  selector: 'app-tagencial',
  templateUrl: './tagencial.component.html',
  styleUrls: ['./tagencial.component.css']
})
export class TagencialComponent implements OnInit {

  @Input() numero:number | any = 0;

  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tablatagencial') as HTMLCanvasElement;
    return element;
  }

  public grafica = () => {
    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    var pruebas = new Chart(this.tableElement() ,{
      type: 'line',
      data: {
        datasets: [{
          //EJE Y
            data: tangente(this.numero),
          }],
          // EJE X
          labels: gradosT(this.numero),
        },
        options: {
          // responsive: true,
          maintainAspectRatio: false,
        }
    });
    return pruebas;

  }

  public updateGraphicChart(){
    // ELIMINACION DEL CANVAS ANTERIOR PARA LA INTEGRACION DEL NUEVO CON DATOS ACTUALIZADOS
    this.destroyGraphicChart();

    // CREACION DE ELEMENTO SECTION PARA LA INTEGRACION/RECUPERACION DE LA GRAFICA (ELIMINE EL CANVAS Y CREE OTRO)
    const sectionCanvas = document.querySelector('#contenedor-grafica-tangente2') as HTMLCanvasElement;
    const canvas =  document.createElement('canvas');
    canvas.id = 'tablatagencial';
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
    console.log("si mi pana estoy tratando de crear tabla");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
