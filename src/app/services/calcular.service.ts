import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor( ) { }

  // FUNCION PARA SACAR LA POSITION
  private operationPosition(amplitud:number,w:number,fase:number,time:number){
    return amplitud * Math.cos(w*time + fase);
  }

  //FUNCION PARA OBTENER LOS DATOS PARA EL EJEY DE LA GRAFICA
  public positionDataY(amplitud:number,w:number,fase:number,time:number){
    let ejeY:number[] = [];
    let operation:number;
    for (let index = 0; index < time; index += 0.8) {
      operation = this.operationPosition(amplitud,w,fase,index);
      ejeY.push(operation);
    }
    return ejeY;
  }

  //FUNCION PARA OBTENER LOS DATOS PARA EL EJEX DE LA GRAFICA
  public positionDataX(time:number){
    let ejeX:number[] = [];
    for (let index = 0; index < time; index += 0.8) {
      ejeX.push(index);
    }
    return ejeX;
  }

  /*
  //FUNCION PARA HACER LA ANIMACION OSCILANTE EN EL EJE Y
  public oscilationData(element: string, amplitud:number,w:number,fase:number,time:number){
    return new Promise ( (resolve,reject) =>{

      let positionDataAnimation:string[] = [];
      let duration = time * 15;
      let operation:number;

      for (let index = 0; index < time; index++) {
        operation = this.operationPosition(amplitud,w,fase,index);
        positionDataAnimation.push(operation + "px");
      }

      //console.log("resultado esperado: ",positionDataAnimation)

      this.animationsServices.animationOscilation(positionDataAnimation,duration);

    })
  }
  */

}
