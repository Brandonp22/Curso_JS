
//Ejemplo de objeto:

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalle: function(){
        console.log(`Auto: ${this.modelo} ${this.annio}`); //this esuna variable que hace referencia al objeto
    }
};

//Para acceder a una propiedad del objecto
miAuto.marca;
//Toyota

miAuto.annio;
//2020

miAuto.detalle();
//Auto: Corolla 2020