// *Variables y operaciones

    // 1. Preguntas
        /*1.1 ¿Qué es una variable y para qué sirve?/*
            //R/ Una variable es un espacio o contenedor donde se puede almacenar algo

        /*1.2 ¿Cuál es la diferencia entre declarar e inicializar una variable?*/
            //R/ Declarar es cuando creamos nuestra variable sin asignarle un valor inicial
                var nombre;
            //R/ Inicializar es cuando asignamos un valor inicial a nuestra variable
                nombre = "Brandon";

        /*1.3 ¿Cuál es la diferencia entre sumar números y concatenar strings? */
            //Al sumar numeros realizamos una operacion matematica
            console.log(5+5);
                //Consola: 10
            //Al "sumar" palabras estamos uniendolas (concatenando) en una sola cadena
            var nombre = "Brandon";
            var apellido = "Pineda";
            console.log("Mi nombre es " + nombre + " " + apellido)
                //Consola: Mi nombre es Brandon Pineda

        /*1.4 ¿Cuál operador me permite sumar o concatenar?  */
            //R/ El operador de suma es "+"

    // 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
        /*  Nombre -- String
            Apellido -- String
            Nombre de usuario en Platzi -- String
            Edad -- int
            Correo electrónico -- String
            Mayor de edad -- boolean
            Dinero ahorrado -- float
            Deudas -- float 
        */
    // 3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
            var nombre = "Brandon";
            var apellido = "Pineda";
            var usuario = "pinedac22";
            var edad = "22";
            var correo = "brandonpineda4@gmail.com";
            var mayorEdad = true;
            var dineroAhorrado = 1000.00;
            var deudas = 300.00;
    // 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
            var nombreCompleto = nombre + " " + apellido;
            var dineroReal = dineroAhorrado - deudas;
            console.log("Hola soy " + nombreCompleto);
                //Consola: Hola soy Brandon Pineda
            console.log("Dinero real: " + dineroReal);
                //Consola: Dinero real: 700


// *Funciones

    // 1. Preguntas
        /*1.1 ¿Qué es una función? */
            //R/ Es un bloque de código que cumple con una tarea especifica

        /*1.2 ¿Cuándo me sirve usar una función en mi código? */
            //R/ Cuando tenemos una tarea que se repite muchas veces en nuestro código

        /*1.3 ¿Cuál es la diferencia entre parámetros y argumentos de una función? */
            //R/ Parámetro: son las variables que estan dentro de la función
            //   Argumentos: son las variables que enviamos a la función cuando la invocamos 

    // 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables 
    //    constantes por parámetros y argumentos en una función: 
            //Código
            const name = "Brandon";
            const lastname = "Pineda";
            const completeName = name + lastname;
            const nickname = "pinedac22";
            console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

            //Respuesta
            var name = prompt("Nombre: ");
            var lastname = prompt("Apellido: ");
            var nickname = prompt("Nickname: ");

            function yo(name, lastname, nickname){
                var completeName = `${name} ${lastname}`;
                console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
            }

            yo(name,lastname,nickname);
                //Consola: Mi nombre es Brandon Pineda, pero prefiero que me digas pinedac22.

// *Condicionales
    // 1. Preguntas
        /*1.1 ¿Qué es una condicional? */
            //R/ Es un bloque codigo que solo sera ejecutado si cumple con la condicion dada

        /*2.1 ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? */
            //R/ Existe el if, else, else if, switch,

        /*3.1 ¿Puedo combinar funciones y condicionales?   */   
            //R/ Si es posible

    // 2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
            //Código
            const tipoDeSuscripcion = "Basic";

            switch (tipoDeSuscripcion) {
            case "Free":
                console.log("Solo puedes tomar los cursos gratis");
                break;
            case "Basic":
                console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
                break;
            case "Expert":
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
                break;
            case "ExpertPlus":
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
                break;
            }

            //Respuesta
            const tipoDeSuscripcion = "Basic";

            if (tipoDeSuscripcion === "ExpertPlus"){
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            }else if (tipoDeSuscripcion === "Expert"){
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            }else if (tipoDeSuscripcion === "Basic"){
                console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            }else{
                console.log("Solo puedes tomar los cursos gratis");
            }

    // 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
            const tipoDeSuscripcion = "Basic";

            if (tipoDeSuscripcion === "ExpertPlus"){
                console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            }
            if (tipoDeSuscripcion === "Expert"){
                console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            }
            if (tipoDeSuscripcion === "Basic"){
                console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            }
            if (tipoDeSuscripcion === "Free"){
                console.log("Solo puedes tomar los cursos gratis");
            }


// *Ciclos
    // 1. Preguntas
        /*1.1 ¿Qué es un ciclo? */
            //R/ Es un bloque de código que realiza iteraciones hasta cumplir su condicion

        /*1.2 ¿Qué tipos de ciclos existen en JavaScript? */
            //R/ for, while, do while

        /*1.3 ¿Qué es un ciclo infinito y por qué es un problema? */
            //R/ Es un bucle del cual no se puede escapar y esto puede causar que los programas se queden congelados y debamos forzar su cierre.

        /*1.4 ¿Puedo mezclar ciclos y condicionales?*/   
            //R/ Si se puede

    // 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
            //Código 1
            for (let i = 0; i < 5; i++) {
                console.log("El valor de i es: " + i);
            }
            //Código 2
            for (let i = 10; i >= 2; i--) {
                console.log("El valor de i es: " + i);
            }

            //Respuesta 1
            let i = 0;
            while(i < 5){
                console.log("El valor de i es: " + i);
                i++;
            }
            //Respuesta 2
            let i = 10;
            while(i >= 2){
                console.log("El valor de i es: " + i);
                i--;
            }
    // 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, 
    //    pero si responden mal, volvemos a empezar.
            
            let operacion = 0;

            while(operacion != 4){
                operacion = prompt("Cuánto es 2 + 2");
            }

// *Listas
    // 1. Preguntas
        /*1.1 ¿Qué es un array? */
            //R/ Es una lista de valores ordenada

        /*1.2 ¿Qué es un objeto? */
            //R/ Es un grupo con propiedades

        /*1.3 ¿Cuándo es mejor usar objetos o arrays? */
            //R/ Cuando necesitamos almacenar un conjunto de datos con propiedades es mejor utilizar objetos.
            var frutas = ["Manzana", "Pera", "Fresa", "Mango"];
            //R/ Cuando almacenamos datos de un mismo tipo sin propiedades pordemos usar arrays.
            var miAuto = {
                marca: "Toyota",
                modelo: "Corolla",
                annio: 2020,
                detalle: function(){
                    console.log(`Auto: ${this.modelo} ${this.annio}`); //this es una variable que hace referencia al objeto
                }
            };
            
        /*1.4 ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? */
            //R/ Si se puede
            var articulos = [
                {nombre: "Bicicleta", costo: 3000},
                {nombre: "TV", costo: 2500},
                {nombre: "Libro", costo: 320},
                {nombre: "Celular", costo: 10000},
                {nombre: "Laptop", costo: 20000},
                {nombre: "Teclado", costo: 500},
                {nombre: "Audifonos", costo: 1700},
            ];

    // 2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
        var frutas = ["Manzana", "Pera", "Fresa", "Mango"];
        
        function primerElemento(frutas){
            console.log(frutas[0]);
        }
        primerElemento(frutas);
            //Consola: Manzana

    // 3. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno 
    //    (no se vale imprimir el array completo).
        var frutas = ["Manzana", "Pera", "Fresa", "Mango"];
        var i = 0;

        function elementos(frutas){
            while(i < frutas.length){
                console.log("Elemento " + i + " " + frutas[i]);
                i++;
            }
        }
        elementos(frutas);
            
    // 4. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno 
    //    (no se vale imprimir el objeto completo).
        var articulos = [
            {nombre: "Bicicleta", costo: 3000},
            {nombre: "TV", costo: 2500},
            {nombre: "Libro", costo: 320},
            {nombre: "Celular", costo: 10000},
            {nombre: "Laptop", costo: 20000},
            {nombre: "Teclado", costo: 500},
            {nombre: "Audifonos", costo: 1700},
        ];
        articulos.forEach(function(articulo){
            console.log("Articulo: " + articulo.nombre + " Costo: " + articulo.costo);
        });

// *Terminado :)
