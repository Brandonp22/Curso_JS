var frutas = ["Manzana", "Pera", "Fresa", "Mango"];

var masFrutas = frutas.push("Uvas"); //Push agrega un elemento al final del array

var ultimo = frutas.pop(); //Pop Elimina el ultimo elemento

var nuevaLongitud = frutas.unshift("Limon"); //A diferencia del push, pop agrega el elemento al principio del array

var borrarFruta = frutas.shift("Pera") //Con shift eliminamos el elemento que esta al principio del array

var posicion = frutas.indexOf("Pera"); // Con indexOf nos retorna la posición de un elemento del array.

console.log(frutas); // Nos retorna el tamaño del array y su contenido
console.log(frutas.length) // length nos retorna la cantidad de frutas
console.log(frutas[0]) // [0] es la posicion para acceder a manzana

