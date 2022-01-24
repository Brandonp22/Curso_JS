
//CLASE #2: Qué es el Scope y cómo funciona el Global Scope

/* Scope global */
// Ejemplo 1
var hello = "hello";
let world = "hello world";
const helloWorld = "Hello World";

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

// Ejemplo 2
const helloWorld = () =>{
    globalVar = "Global"
}
helloWorld();
console.log(globalVar);

// Ejemplo 3
const anotherFunction = () =>{
    var localvar = globalVar = "Global 2";
}
anotherFunction();
console.log(globalVar);

