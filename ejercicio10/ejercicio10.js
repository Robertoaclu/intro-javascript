/**
 *  Ejercicio 10
 *  Construir un algoritmo que reciba la categoria y el sueldo de un trabajador y
 *  calcule el aumento de sueldo correspondiente teniendo en cuenta la siguiente
 *  tabla.
 *
 *  Categoria 1 = Aumento del 15%
 *  Categoria 2 = Aumento del 10%
 *  Categoria 3 = Aumento del 6%
 *  Categoria 4 = Aumento del 3%
 *
 *  El algoritmo debera retornar el nuevo salario. Ten en cuenta que el sueldo del
 *  trabajador podria no entrar en ninguna categoria.
 */

function nuevoSalario(sueldo, categoria) {
  let nuevoSueldo = 0;  
  if (categoria == 1){
    nuevoSueldo=sueldo+((sueldo*15)/100);
    return nuevoSueldo;
  }else if(categoria == 2){
    nuevoSueldo=sueldo+((sueldo*10)/100);
    return nuevoSueldo;
  }else if(categoria == 3){
    nuevoSueldo=sueldo+((sueldo*6)/100);
    return nuevoSueldo;
  }else if(categoria == 4){
    nuevoSueldo=sueldo+((sueldo*3)/100);
    return nuevoSueldo;
  }else{
    return sueldo;
  }
}

module.exports = { nuevoSalario };
