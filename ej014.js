/*Crear un documento con el nombre arr_014.js
Partiendo del siguiente array de números var numeros = [6, 1, 2, 3, 4, 5];
Eliminar el primer elemento, y agregarlo al final del array.
Mostrar el resultado final
Resultado esperado
[1, 2, 3, 4, 5, 6]*/


var numeros = [6, 1, 2, 3, 4, 5];
numeros.push(numeros.shift());

console.log(numeros);