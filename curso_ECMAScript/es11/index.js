////// CLASE #11: ECMAScript 2020 //////

/* Dynamic import  */
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});



////// CLASE #12: ECMAScript 2020 - características importantes //////

/* Big Int */
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(`Con N: ${aBigNumber} 
Sin N: ${anotherBigNumber}
`);


/* Promise all Settled */
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


/* Global This */
console.log(window);
console.log(globalThis);


/* Operador Nulo */
const fooo = null ?? "default string";
console.log(fooo);

const fooo1 = "Hello" ?? "default string";
console.log(fooo1);


/* optional chaining */
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("fail");
}
