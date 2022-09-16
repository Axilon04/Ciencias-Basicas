//NPM INSTALL MATHJS
import * as math from "mathjs";

 // FUNCION PARA SACAR LOS GRADOS PARA EL EJE X
 const gradosT = (numero: number) => {
   let grados = [];
   for (let index = -(numero); index <= numero; index += 5) {
     grados.push(index);
   }
   return grados;
 }

 // FUNCION PARA SACAR LA TANGENTE DE LOS GRADOS PARA EL EJE Y
 const tangente = (numero: number) => {
   let tangente = [];
   for (let index = -(numero); index <= numero; index += 5) {
     if (index == -270 || index == -90 || index == 90 || index == 270){
       tangente.push(null);
     }else{
       tangente.push(Math.tan(index * math.pi/180));
     }

   }
   return tangente;
 }



// DOS FUNCIONES QUE AL INGRESAR UN GRADO REALICE LA RADIAL-(SENO) LOS GRADOS EN UN VECTOR Y LOS ESULTADOS EN OTRO VECTOR
//ALMACENAMIENTO DE LOS GRADOS
const grados = (numero:number) =>{
  let grados =[];
  if (numero>360) {

    console.log("Este valor no es permitido ingrese un valor menor a 360")

  }
  else{
    for (let index =(numero); index >= 0; index-=5) {
      grados.push(index);
      }
  }
    return grados;
}
//CALCULO DE LOS GRADOS INGRESADOS PARA LA FUNCION SENO
const seno =(numero:number)=>{
  let seno =[];

  for (let index =(numero); index >= -(numero); index-=5) {
    seno.push(Math.sin(index*math.pi/180));
    }
    return seno;
}


//ENTREGA VIERNES
//EJE X
const amplitud =(tiempoF:number,tiempoR:number)=>{
  let amplitud =[];
  var count=0;
  for (let index = (0); index <= (tiempoF); index+=tiempoR) {
    count=index;
    amplitud.push((count).toFixed(2)) ;

    console.log(count);
  }

  return amplitud;
}
//EJE Y
//TIEMPOF EN CUANTO TIEMPO QUIRE LA GRAFICA
//TIEMPOR EL PASO CON QUE VA A RECORRER LA GRAFICA
const seno2 =(tiempoF:number,tiempoR:number,numero:number,omega:number,fi:number)=>{
  let seno2 =[];
  var ecuacion1:number;
  var ecuacion2:number;
  var ecuacion3:number;
  for (let index =(0); index <= (tiempoF); index+=tiempoR) {
    console.log(index)
    ecuacion1=omega*index;
    ecuacion2=ecuacion1+fi ;
    ecuacion3=Math.sin(ecuacion2);
    seno2.push(numero*ecuacion3);
    }
    return seno2;
}
export {amplitud,seno2,gradosT,tangente}
