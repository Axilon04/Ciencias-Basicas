import { Directive, ElementRef } from '@angular/core';
import anime from 'animejs';
//import anime from 'animejs';



@Directive({
  selector: '[appAnimationsObjects]'
})
export class AnimationsObjectsDirective {

  constructor(
    private elementos: ElementRef
  ) {
    console.log(elementos)
    this.animationPrueba();
  }

  public animationPrueba(){
    anime({
      targets: this.elementos.nativeElement,
      keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  }


}



