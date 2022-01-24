//CLASE #3: Local Scope

//Ejemplo 1
const helloWorld = () =>{
    const hello = "Hello World";
    console.log(hello);
}
helloWorld();
console.log(hello); // No puede acceder a la variable ya que no es global

//Ejemplo 2
var scope = "var global";
const functionScope = () =>{
    var scope = "var local";
    const func = () =>{
        return scope
    }
    console.log(func());
};
functionScope();
console.log(scope);