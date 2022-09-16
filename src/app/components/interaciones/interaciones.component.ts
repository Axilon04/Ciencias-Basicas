import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interaciones',
  templateUrl: './interaciones.component.html',
  styleUrls: ['./interaciones.component.css']
})
export class InteracionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  interacion = [
    {
      routerlink:"/graphicline",
      title:"Movimiento Armonico Simple",
      src:"../../../assets/images/grafica.jpeg"
    },
    {
      routerlink:"/tagencialLine",
      title:"Funcion tagencial",
      src:"../../../assets/images/WhatsApp Image 2022-09-16 at 2.28.32 AM.jpeg"
    },
    {
      routerlink:"/senoLine",
      title:"Funcion seno",
      src:"../../../assets/images/WhatsApp Image 2022-09-16 at 2.28.32 AM.jpeg"
    }

  ]
}
