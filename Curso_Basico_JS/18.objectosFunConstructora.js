
//Codigo Clase
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

auto;
/* ƒ auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} */

var autoNuevo = new auto("Tesla, modelo x, 2020");
//new genera una nueva instancia
autoNuevo;
//auto {marca: 'Tesla, modelo x, 2020', modelo: undefined, annio: undefined}


var autoNuevo2 = new auto("Tesla, modelo y, 2021");
var autoNuevo3 = new auto("Toyota, corolla, 2020");

autoNuevo2;
//auto {marca: 'Tesla, modelo y, 2021', modelo: undefined, annio: undefined}
autoNuevo3;
//auto {marca: 'Toyota, corolla, 2020', modelo: undefined, annio: undefined}


// Reto 
var autos = [];
var inventario =[];
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var cantidad = prompt("¿Cuantos autos ingresara?"); // Prompt nos permite agregar un input

for(var i = 0; i < cantidad; i++){
    var marca = prompt("Marca: ");
    var modelo = prompt("Modelo: ");
    var annio = prompt("Año: ");

    autos.push(new auto(marca, modelo, annio));
}

for(var i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}