import { Component, Input, OnInit } from '@angular/core';
import { CalcularService } from '../../../services/calcular.service'

@Component({
  selector: 'app-masa-resorte',
  templateUrl: './masa-resorte.component.html',
  styleUrls: ['./masa-resorte.component.css']
})
export class MasaResorteComponent implements OnInit {

  @Input() amplitud:number = 100;
  @Input() w:number = 0.1;
  @Input() fase:number = 1.570;
  @Input() time:number = 1000;
  square: anime.AnimeInstance | undefined;

  public element(){
    const elemento = document.querySelector('#esfera') as HTMLDivElement;
    return elemento;
  }

  constructor(
    private calcularService: CalcularService
  ) { }

  ngOnInit(): void {
  }

  public animationOscilacion(){
    this.calcularService.oscilationData(".esfera",this.amplitud,this.w,this.fase,this.time);
  }


}
