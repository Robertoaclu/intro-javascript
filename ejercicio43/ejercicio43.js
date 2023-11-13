const { closeSync } = require("graceful-fs");

/**
 * Ejercicio 43
 *  Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare.
 *  Tendrá la estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39​
 */
function relojInfinito() {
  let hora = 0;
  let min = 0;
  let seg = 0;


  while (true){
    segundos +=0;

    if(++segundos >= 60){
      segundos = 0;
      minutos += 1;

      if(++minutos >= 60){
        minutos=0;
        horas += 1;
        
        if(++horas >= 23){
          horas = 0;
        }
      }
    }
    console.log(`${horas}:${minutos}:${segundos}`);
  }
}

module.exports = { relojInfinito };
