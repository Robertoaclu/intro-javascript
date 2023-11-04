/**
 *  Ejercicio 11
 *  En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente.
 */

function descuentoCompra(gasto) {
  
  if(gasto<500){
    let gastoFinal= gasto;
  }else if(gasto>500 && gasto<1000){
    gastoFinal=gasto+(gasto*0.05);
  }else if(gasto>100 && gasto<7000){
    gastoFinal=gasto+(gasto*0.1);
  }else if(gasto>7000 && gasto<15000){
    gastoFinal=gasto+(gasto*0.2);
  }else if(gasto>15000){
    gastoFinal=gasto+(gasto*0.25);
  }
  return gastoFinal;
}

module.exports = { descuentoCompra };
