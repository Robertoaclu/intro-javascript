/**
 *  Ejercicio 17
 *  Crea un algoritmo que nos calcule la suma de los N primeros numeros
 *  naturales que seran introducidos como parametro de la funcion.
 *  La funcion retornara la suma.
 */

function calcularSumaNumerosNaturales(N) {
  let suma=0;
  let lista=[];
  for (i=0; i<=N; i++){
    suma+=lista[i];
  }
  return suma;
}

module.exports = { calcularSumaNumerosNaturales };
