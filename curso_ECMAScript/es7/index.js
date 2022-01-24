////// CLASE #7: ¿Qué se implementó en ES7? //////

/* Includes */

 let numbers = [1, 2, 3, 7, 8];
 const VALUE = 7;
 
// En ES7 se agrego el metodo includes, en este ejemplo se utiliza para saber si un dato se encuentra dentro del array
 if (numbers.includes(VALUE)) { 
   console.log(`Sí se encuentra el valor ${VALUE}`);
 } else {
   console.log(`No se encuentra el valor ${VALUE}`);
 }
 
/* Pow */
 let base = 4;
 let exponent = 4;
 let result = base ** exponent; // el uso de ** se añadio en ES7
 console.log(`Result -> ${result}`);