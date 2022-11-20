import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profesores = [
    {
      nombre: 'Keven',
      description: 'profesor que dicta calculo II, para los estudiantes de las ingenierias y le gusta los powerpoint para dictar fisica.',
      src: './assets/images/fondo2.jpeg'
    },
    {
      nombre: 'Fidel castro',
      description: 'profesor que dicta fisica II.',
      src: './assets/images/fondo2.jpeg'
    },
    {
      nombre: 'Karen',
      description: 'profesor que dicta algebra',
      src: './assets/images/fondo2.jpeg'
    }
  ]

}
