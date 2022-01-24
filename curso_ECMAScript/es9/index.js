////// CLASE #9: ¿Qué se implementó en ES9? //////

/* Operador de recurso */

const obj = {
    nameP: "Brandon",
    age: 22,
    coutry: "GT",
};
// Desestructuramos el objeto, sacamos el key que nos interesa y agregamos ...all para no escribir el resto
let {nameP, ...all} = obj;
console.log(nameP, all);
/// Brandon { age: 22, coutry: 'GT' }
let {age, ...all} = obj;
console.log(all);
/// { nameP: 'Brandon', age: 22 }


/* Utilizando las propiedades de propagacion */
const obj = {
    nameP: "Brandon",
    age: 22,
};

const obj1 = {
    ...obj, // ... es conocido como operador de propagacion
    coutry: "GT",
};
// Con el operador de propagacion podemos traer todos las keys con sus respectivos valores de objeto
console.log(obj1);


/* Promise finally */
const helloWorld =() =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Test Error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizo"));


/* Regex */
//Es util para el manejo de fechas
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
