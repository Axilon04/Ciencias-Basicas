import { Injectable } from '@angular/core';
import * as anime from 'animejs';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  public animationOscilation(positionDataY:string[],time:number){
    let animation = {
      translateY: positionDataY,
      duration: time,
      easing: 'linear',
    }
    return animation;
  }


  constructor() { }
}
