import * as math from "mathjs";

// FUNCION PARA SACAR LOS GRADOS PARA EL EJE X
const grados = (numero: number) => {
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

//console.log(calcular(360));

export {grados,tangente};
