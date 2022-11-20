import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  interaciones = [
    {
      routerlink:"/graphicLine",
      title:"Movimiento Armonico Simple",
      subtitle: "descripcion",
      src:"./assets/images/grafica.jpeg"
    },
    {
      routerlink:"/tagencialLine",
      title:"Funcion tagencial",
      subtitle: "descripcion",
      src:"./assets/images/WhatsApp Image 2022-09-16 at 2.28.32 AM.jpeg"
    },
    {
      routerlink:"/senoLine",
      title:"Funcion seno",
      subtitle: "descripcion",
      src:"./assets/images/seno1.png"
    }
    ,
    {
      routerlink:"/masaResorteLine",
      title:"Sistema Masa Resorte (Beta)",
      subtitle: "descripcion",
      src:"./assets/images/seno1.png"
    }

  ]

  aboutData: any[] = [
    {
      titulo: 'Mision',
      description: 'Formamos integralmente personas competentes, fundamentadas en criterios socio-humanísticos, comprometidos con la responsabilidad social y la consolidación del desarrollo sostenible de la región.'
    },
    {
      titulo: 'Vision',
      description: 'Unimeta para el 2025 se consolida como una Institución reconocida por la pertinencia y la calidad de sus programas, su aporte pedagógico a la educación superior y su contribución al desarrollo sostenible de la región.',
    },
  ]

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh)
  }

}
