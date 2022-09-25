import { Directive, ElementRef } from '@angular/core';
//import * as anime from 'animejs';
import anime from 'animejs/lib/anime.es';


@Directive({
  selector: '[appAnimationsObjects],[animeData]'
})
export class AnimationsObjectsDirective {

  constructor(
    public elementos: ElementRef
  ) {
    this.elementos.nativeElement.style.position = 'relative';
  }

  public animationPrueba(): void{
    anime({
      targets: this.elementos,
      left: '1px'
    })

  }


}



