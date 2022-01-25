//CLASE #4: Function Scope

//Ejemplo 1
const fruits = () =>{
    var fruit = "apple";
    console.log(fruit);
};
fruits();
console.log(fruit); // No esta definido en el scope global

//Ejemplo 2
const anotherFunction = () =>{
    var x = 1;
    var x = 2;
    let y = 1;
    let y = 2; //no se puede volver a declarar una variable en su mismo scope
    console.log(x);
    console.log(y);
}
anotherFunction();


