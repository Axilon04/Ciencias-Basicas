import { Component, Input, OnInit } from '@angular/core';
import {grados,seno} from "../graphic-lineal/calcular"
import { Chart } from "chart.js";
@Component({
  selector: 'app-seno',
  templateUrl: './seno.component.html',
  styleUrls: ['./seno.component.css']
})
export class SenoComponent implements OnInit {

  @Input() number:number | any;
  
  
  public tableElement = () => {
    // LLAMANDO ELEMENTO CANVAS
    const element = document.querySelector('#tablaSeno') as HTMLCanvasElement;
    return element;
  }

  public grafica = () => {
    // CREACION DE LA GRAFICA USANDO LA LIBRERIA CHARTS JS
    var pruebas = new Chart(this.tableElement() ,{
      type: 'line',
      data: {
        datasets: [{
          //EJE Y
            data: seno(this.number),
          }],
          // EJE X
          labels: grados(this.number),
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
    const sectionCanvas = document.querySelector('#contenedor-grafica-seno') as HTMLCanvasElement;
    const canvas =  document.createElement('canvas');
    canvas.id = 'tablaSeno';
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
