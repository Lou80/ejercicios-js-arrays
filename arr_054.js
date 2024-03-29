/*Crear un documento con el nombre arr_054.js
Tenemos un array en una variable costos con números que representan costos de diferentes productos.
Completar el siguiente código para obtener el precio final de cada producto y después calcular la suma total.
A un costo primero se le agrega la ganancia y después el IVA
Usar map y reduce
*/
var costos = [ 12.5, 56, 98 ];

var sumarGanancia = costos.map(function (costo) {
    return costo * 1.5;
})

var agregarIVA = sumarGanancia.map(function (precio) {
  return precio * 1.21;
})

var precioTotal = agregarIVA.reduce(function(total,precio) {
    return total + precio;
});

// codear acá la solución del ejercicio


console.log(precioTotal); // 302.1975