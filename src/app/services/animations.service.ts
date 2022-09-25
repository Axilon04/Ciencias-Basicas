import { Injectable } from '@angular/core';
import * as anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  public animationOscilation(element:string,positionDataY:string[],time:number){
    let animation = anime({
      targets: element,
      translateY: positionDataY,
      duration: time,
      easing: 'linear',
    })
    return animation;
  }

  public animationPrueba(){
    anime({
      targets: '.esfera',
      translateX: 250,
    });
  }

  constructor() { }
}
