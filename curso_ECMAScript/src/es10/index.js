////// CLASE #10: ¿Qué se implementó en ES10? //////

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));


/* flat math */
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));


/* Trim Start */
let hello = "      hello world";
console.log(`*${hello}`);
console.log(`*${hello.trimStart()}`); // Elimina Espacios al inicio
    /// *      hello world
    /// *hello world

/* Trim End */
let hello = "hello world      ";
console.log(`${hello}!`);
console.log(`${hello.trimEnd()}!`); // Elimina Espacios al final
    /// hello world      !
    /// hello world!

/* Trim */
let hello = "    Hello world    "
console.log(`*${hello}!`);
console.log(`*${hello.trim()}!`); // Elimina Espacios al inicio y al final
    /// *    Hello world    !
    /// *Hello world!


try {
    
} catch { // (error) ya no es necesario colocarlo
    error
}


/* From entries */
let entries = [["name", "Brandon"], ["age", 22]];
console.log(Object.fromEntries(entries));


/* Objeto tipo simbolo */
let mySymbol = "my symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);

