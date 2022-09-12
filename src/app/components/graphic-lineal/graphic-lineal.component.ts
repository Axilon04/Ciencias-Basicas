import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { grados,tangente } from './calcular';

@Component({
  selector: 'app-graphic-lineal',
  templateUrl: './graphic-lineal.component.html',
  styleUrls: ['./graphic-lineal.component.css']
})
export class GraphicLinealComponent implements OnInit {

  @Input() numero:number = 360;

  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tabla') as HTMLCanvasElement;
    return element;
  }

  public grafica = () => {
    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    var pruebas = new Chart(this.tableElement() ,{
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
    console.log("si mi pana estoy tratando de crear tabla");
  }

  constructor() {
  }

  ngOnInit(): void {

  }
}


