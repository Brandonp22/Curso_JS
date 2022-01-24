
////// CLASE #2: Default Params y Concatenación //////

/* Funciones */
// Como se crea una funcion con parametros por defecto antes de ES6
function newFuction(name, age, country){
    var name = name || "Brandon";
    var age = age || 22;
    var country = country || "GT";
    console.log(name, age, country);
}

// Ahora en ES6 los valores se pueden asignar dentro  de los parametros
function newFuction2(name = "Brandon", age = 22, country = "GT"){
    console.log(name, age, country);
};

newFuction2();
newFuction("Josue", "23", "CO");


/* Template Literal */
// Concatenacion antes del ES6
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// Concatenacion ahora en ES6 utilizando comillas invertidas `` (ALT + 96)
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);



////// CLASE #3: LET y CONST, Multilínea, Spread Operator y Desestructuración //////

/* MultiLinea en los Strings */
// Antes del ES6 se hacia salto de linea con \n donde queriamos que ocurriera el salto y para concatenear otra linea usabamos + "Frase" 
let lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit \n" 
+ "Otra frase concatenada."

// Ahora en ES6 es más sencillo y optimo, utilizando las comillas invertidas `` y para generar el salto de linea solo debemos hacer enter y escribir en la siguiente linea sin concatenar.
//IMPORTANTE: siempre debe ir todo dentro de los ` ` 
let lorem2 = `Lorem ipsum dolor sit amet consectetur adipiscing elit
ahora es otra frase en otra linea
`;

console.log(lorem);
console.log(lorem2);


/* Desestructuracion  */
//Creamos un objeto
let person = {
    "nameP": "Brandon",
    "age" : 22,
    "country" : "GT"
}

//Esta seria la forma Antes de ES6, llamando al atributo correspondiente a la key name del objeto person 
console.log(person.nameP, person.age);

// Esta es la forma con ES6, podemos desestructurar nuestro objeto, elegir que keys necesitamos y llamarlo sin uso del objeto.key
let {nameP} = person;
console.log(nameP);


/* Operador de Propagacion */
let team1 = ["Brandon", "Josue", "Juan"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];
console.log(education);


/* var, Let, const */
{
var globalVar = "Global Var"; // Var esta disponible de manera global
}

{
    let globalLet = "Global Let";  //Let solo se usa para el scope, es decir solo funciona en el bloque de codigo donde fue definido
    console.log(globalLet);
}

console.log(globalVar);

const a = "b"; // Const es igual que let, a diferencia que su valor no puede ser reasignado
console.log(a);



////// CLASE #4: Arrow Functions, Promesas y Parámetros en objetos //////

let nameP = "Brandon";
let age = 22;

// Antes de ES6
obj = {nameP: nameP, age:age};

// ES6
obj2 = {nameP, age};
console.log(obj);
console.log(obj2);

/* Arrow function  */
const names = [
    {nameP: "Brandon", age: 22},
    {nameP: "Oscar", age: 21},
]

// Antes de ES6
let listOfNames = names.map(function(item){
    console.log(item.nameP);
})

// Ahora con ES6 utilizando arrow fuction que son una alternativa compacta de una expresion de funcion tradicional como la de ES5
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (nameP, age, country) => {

}

const listOfNames4 = name =>{

}

const square = num => num * num;


/* Promesas */
const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Ok!");
        }else{
            reject("Something is Wrong!!");
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));



////// CLASE #5: Clases, Módulos y Generadores //////

/* Clases */

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

/* Imports y exports  */

/* import {hello} from "./module";  <--- NO FUNCIONA ???
hello(); */
const hello = require('./module')
console.log((hello()));
 
/* Generators */
function* helloWorld(){ // * es para asignar que es un generator
    if(true){
        yield "hello, "; // La palabra clave yield se usa para pausar y reanudar una función generadora
    }if(true){
        yield "world";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// Ejemplo de una funcion generadora
function* countAppleSales () { 
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
      yield saleList[i]
    }
  }
let appleStore = countAppleSales()  // Generator { }
console.log(appleStore.next())      // { value: 3, done: false }
console.log(appleStore.next())      // { value: 7, done: false }
console.log(appleStore.next())      // { value: 5, done: false }
console.log(appleStore.next())      // { value: undefined, done: true }


