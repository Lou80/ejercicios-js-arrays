/*Crear un documento con el nombre arr_004.js
Crear el siguiente array con el nombre datos: [27, true, 'La edad de la persona es: ']
Si el segundo item en el array datos es verdadero entonces
Mostrar en consola: La edad de la persona es: 27
Utilizar el primer y último item del array datos para formar el string del mensaje pedido*/


var datos = [27, true, 'La edad de la persona es: '];

if (datos[1] == true) {
    console.log(datos[2], datos[0]);
}