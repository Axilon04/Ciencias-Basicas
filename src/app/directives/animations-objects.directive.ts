import { Directive, ElementRef } from '@angular/core';
import * as animejs from 'animejs';


@Directive({
  selector: '[appAnimationsObjects]'
})
export class AnimationsObjectsDirective {

  constructor(
    public elementos: ElementRef
  ) {
    console.log(elementos)
    this.animationPrueba();
  }

  public animationPrueba(){
    const variable = animejs({
      targets: 'div',
      translateX: 100,
      easing: 'easeOutQuad',
      duration: 100,
      loop: true
    });
    return variable;
  }


}



