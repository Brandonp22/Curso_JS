////// CLASE #12: ECMAScript 2021 //////

/* replace all */
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";

const replacedString = string.replace("JavaScript", "Python");
console.log(`String: ${string}`);
console.log(`replace: ${replacedString}`);

const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(`replaceAll: ${replacedString2}`);


/* Metodos Privados */
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
       
    }
}

const mesage = new Message();
mesage.show("Hola");


/* Promise Any */
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


/* WeakRef */
class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
    //{...}
}


/* Nuevos operadores logicos */

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
    /// false
isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse);
    /// true
isTrue = undefined;
isFalse = false;
console.log(isTrue ??= isFalse);
    ///false



