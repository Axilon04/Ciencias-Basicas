import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // CARD ASIGNATURAS
  carousel_images = [
    {
      image:"../../../assets/images/biologia.png",
      alt:"image1"
    },
    {
      image:"../../../assets/images/calculo.png",
      alt:"image2"
    },
    {
      image:"../../../assets/images/matematica1.png",
      alt:"image3"
    },
    {
      image:"../../../assets/images/quimica.png",
      alt:"image4"
    },
    {
      image:"../../../assets/images/tierra.png",
      alt:"image5"
    }
  ];
  //BOTONES DE REDERICIONAMIENTO
  btns = [
    {
      router:"Interaciones",
      icon:"bi bi-star",
      text:"Interacciones"
    },
    {
      router:"",
      icon:"bi bi-book",
      text:"Libros"
    },
    {
      router:"Asignaturas",
      icon:"bi bi-journal-medical",
      text:"Asignaturas"
    }

  ];
}
