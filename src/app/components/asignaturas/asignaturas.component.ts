import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  materia = [
    {
      materia:'Calculo'
    },
    {
      materia:'Fisica'

    }
  ]


  asignatura = [
    {
      materia:'Calculo I (Diferencial)',
      link:'Calculo-I'
    },
    {
      materia:'Calculo II (Integral)',
      link:'Calculo-II'
    },
    {
      materia:'Calculo III (Multivariado)',
      link:'Calculo-III'
    },
  ]
}
