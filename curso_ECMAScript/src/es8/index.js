////// CLASE #7: ¿Qué se implementó en ES8? //////

const data = {
    frontend: "Brandon",
    backend: "Oscar",
    desing: "Ana",
}

// En ES8 se agrego una forma de transformar objetos en matrices
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); 


const data = {
    frontend: "Brandon",
    backend: "Oscar",
    desing: "Ana",
}

// Con values podemos acceder al valor de las keys del objeto
const values = Object.values(data);
console.log(values);
console.log(values.length);


// Se implemento el padding 
const string = "hello";

// padStart nos permite agregar mas letras a un string al principio de el
console.log(string.padStart(7, "hi"));
// padEnd nos permite agregar mas letras a un string al final de el
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));



////// CLASE #8: Async Await //////

const helloWorld= () => {
    return new Promise((resolve, reject) =>{
        (false)
        ? setTimeout(()=> resolve("helloWorld"), 3000)
        : reject(new Error("Test Error"))
    })
}

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
    console.log(error);
    }
}

anotherFunction();

// EJEMPLO DE LA CLASE
// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}

const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(`Error: ${e}`); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}

buyIceCream(400); //1. llamas a la funcion comprar helado e Ingresas el dinero