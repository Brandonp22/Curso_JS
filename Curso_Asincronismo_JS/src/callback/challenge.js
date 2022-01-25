//CLASE #5: Peticiones a APIs usando Callbacks

/* Implementacion de una API con XMLHttpRequest */
//Instanciadno el request, nos permite hacer peticiones al servidor
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback){ //Referencia al objeto XMLHttpRequest
    let xhttp = new XMLHttpRequest(); //A nuestra referencia xhttp le pasamos un llamado open donde
    //el parametro 1 es igual al metodo, el parametro 2 a la URL y el parametro 3 verifica si es 
    //asincrono o no, valor por defecto True.

    xhttp.open("GET", url_api, true);//cual el estado del objeto cambia, 
    //ejecuta la siguiente funcion:
    xhttp.onreadystatechange = function(event){ //los estados que puede tener son:
    /*  estado 0: solicitud no inicializada
        estado 1: conexión de servidor establecida
        estado 2: solicitud recibida
        estado 3: solicitud de procesamiento
        estado 4: solicitud finalizada y respuesta lista */ 
        if(xhttp.readyState === 4){ //Verifica el estado
            if(xhttp.status === 200){ //Estandar de node con callbacks: 
                //primer parametro error
                //segundo parametro resultado
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error(`Error ${url_api}`);
                return callback(error, null);
            }
        }
    }
    xhttp.send(); //Envia la solicitud
}


//CLASE #6: Múltiples Peticiones a un API con Callbacks
fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})