// Recorriendo Arrays con .find(), .forEach() y .some()

var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//find nos devuelve el primer elemento del array que cumpla con la condicion
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//forEach ejecuta lo definido una vez por cada elemento 
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Some nos comprueba si hay al menos un elemento que cumpla con la condicion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
