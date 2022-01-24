//CLASE #5: Block Scope

//Ejemplo 1
const fruits = () =>{
    if (true){
        var fruit1 = "apple";
        let fruit2 = "banana";
        const fruit3 = "kiwi";
        console.log(fruit2); 
        console.log(fruit3);
    }
    console.log(fruit1);
    console.log(fruit2); // no ser accedido porque no esta dentro del bloque
    console.log(fruit3); // igual este no puede acceder
}
fruits();

//Ejemplo 2
let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

//Ejemplo 3
const anotherFunction = () =>{
    for (var i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
anotherFunction();

const anotherFunction = () =>{
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
anotherFunction();