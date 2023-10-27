/**
 *  Ejercicio 8
 *  Crea un algoritmo que reciba el sueldo de un trabajador y
 *  aplique un incremento del 15% si el sueldo es inferior a 1000€.
 *  El algoritmo debera retornar el nuevo salario.
 */

function incrementarSueldo(salario) {
    if(salario<1000){
        return salario+((salario*15)/100);
    }else {
        return salario;
    }
}

module.exports = { incrementarSueldo };
