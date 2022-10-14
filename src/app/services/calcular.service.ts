import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor( ) { }

  private ejeY: number[] = [];
  private ejeX: number[] = [];
  private animationEjeY:number [] = [];

  // FUNCION PARA SACAR LA POSITION
  private operationPosition(amplitud:number,w:number,fase:number,time:number){
    let operation:number = amplitud * Math.cos(w*time + fase);
    return (operation.toFixed(2)).toString();
  }

  //FUNCION PARA OBTENER LOS DATOS PARA EL EJEY DE LA GRAFICA
  private positionDataY(amplitud:number,w:number,fase:number,time:number){
    for (let index = 0; index < time; index += 1) {
      this.ejeY.push(Number(this.operationPosition(amplitud,w,fase,index)));
    }
  }

  //FUNCION PARA OBTENER LOS DATOS PARA EL EJEX DE LA GRAFICA
  private positionDataX(time:number){
    for (let index:number = 0; index < time; index += 1) {
      this.ejeX.push(Number(index.toFixed(2)));
    }
  }

  // FUNCION PARA OBTENER LOS DATOS DE LA ANIMATIONS
  private positionDataYAnimations(amplitud:number,w:number,fase:number,time:number){
    for (let index = 0; index < time; index += 1) {
      this.animationEjeY.push(Number(-(this.operationPosition(amplitud,w,fase,index))));
    }
  }

  //RELLENAR LOS VECTORES
  public async starOperation(amplitud:number,w:number,fase:number,time:number){
    await this.positionDataY(amplitud,w,fase,time);
    await this.positionDataX(time);
    await this.positionDataYAnimations(amplitud,w,fase,time);
  }

  //VACIAR VECTORES
  public async endOperaion(){
    this.ejeY.length = 0;
    this.ejeX.length = 0;
    this.animationEjeY.length = 0;
  }

  // OBTENER DATOS DE LOS EJES
  public getEjeY(){
    return this.ejeY;
  }

  public getEjeX(){
    return this.ejeX;
  }

  public getDataAnimation(){
    return this.animationEjeY;
  }

}
