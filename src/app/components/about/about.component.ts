import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teacherData = [
    {
      title: 'Profesor Calculo I',
      description: 'descripcion',
      src: './assets/images/grafica.jpeg'
    },
    {
      title:"Profesor Fisica I",
      description: "descripcion",
      src:"./assets/images/grafica.jpeg"
    },
    {
      title:"Profesora Algebra",
      description: "descripcion",
      src:"./assets/images/grafica.jpeg"
    }
  ]

}
