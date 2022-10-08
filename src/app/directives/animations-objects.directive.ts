import { Directive, ElementRef, Input } from '@angular/core';
import anime from 'animejs';
//import anime from 'animejs';



@Directive({
  selector: '[appAnimationsObjects],[anime]'
})
export class AnimationsObjectsDirective {

  @Input() anime: any;
  
  private animeInstance: any;

  constructor(
    private elementos: ElementRef
  ) {
    console.log(elementos)
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  ngOnChanges(changes: any): void {
    if ('anime' in changes){
      this.dispose();
      this.animeInstance = anime({
        targets: this.elementos.nativeElement,
        ... this.anime
      })
    }
    
  }

  private dispose(){
    if(this.animeInstance){
      anime.remove(this.elementos.nativeElement);
      this.animeInstance = null;
    }
  }

}



