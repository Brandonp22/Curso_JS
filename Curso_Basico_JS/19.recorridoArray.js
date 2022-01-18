var articulos = [

    {nombre: "Bicicleta", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(artitulo){
    return artitulo.costo <= 500; //Filtramos articulos que cuestan menos o igual a 500
});

//Imprimios en consola los articulos filtrados
for(var i = 0 ; i < articulosFiltrados.length ; i++){
    console.log(articulosFiltrados[i]);
}


var nombreArticulos = articulos.map(function(artitulo){
    return artitulo.nombre;
});

//Imprimios en consola todos los articulos por su nombre
for(var i = 0 ; i < nombreArticulos.length ; i++){
    console.log(nombreArticulos[i]);
}