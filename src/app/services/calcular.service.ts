import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor( ) { }

  private ejeYCoseno: number[] = [];
  private ejeYSeno: number[] = [];
  private ejeX: number[] = [];
  private animationEjeY: number[] = [];

  // FUNCION PARA SACAR LA POSITION COSENO
  private operationPositionCoseno(amplitud:number,w:number,fase:number,time:number){
    return Number(amplitud * Math.cos( w * time + fase )).toFixed(2);
  }

  // FUNCION PARA SACAR LA POSITION SENO
  private operationPositionSeno(amplitud:number,w:number,fase:number,time:number){
    return String(((amplitud * Math.sin( w * time + fase)).toFixed(2)));
  }

  //FUNCION PARA OBTENER LOS DATOS PARA EL EJEY DE LA GRAFICA
  private dataOperations(amplitud:number,w:number,fase:number,time:number){
    for (let index: number = 0; index < time; index += 0.01) {
      this.ejeYCoseno.push(Number(this.operationPositionCoseno(amplitud,w,fase,index)));
      this.ejeYSeno.push(Number(this.operationPositionSeno(amplitud,w,fase,index)));
      this.animationEjeY.push(Number(-(Number(this.operationPositionCoseno(amplitud,w,fase,index)))));
      this.ejeX.push(Number(index.toFixed(2)));
    }
  }

  //RELLENAR LOS VECTORES
  public starOperation(amplitud:number,w:number,fase:number,time:number){
    this.dataOperations(amplitud,w,fase,time);
  }

  //VACIAR VECTORES
  public async endOperaion(){
    this.ejeYCoseno.length = 0;
    this.ejeYSeno.length = 0;
    this.ejeX.length = 0;
    this.animationEjeY.length = 0;
  }

  // OBTENER DATOS DE LOS EJES
  public getEjeYCoseno(){
    return this.ejeYCoseno;
  }
  public getEjeYSeno(){
    return this.ejeYSeno
  }
  public getEjeX(){
    return this.ejeX;
  }
  public getDataAnimation(){
    return this.animationEjeY;
  }

}
