//CLASE #8: Resolver problema con Promesas

//Transformado a ECMAScript 6+
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetchData = (url_api, callback) =>{
    return new Promise ((resolve, reject) =>{
        const xhttp = new XMLHttpRequest(); 
        xhttp.open("GET", url_api, true);
        xhttp.onreadystatechange = (() =>{
            if(xhttp.readyState === 4){ 
                (xhttp.status === 200) // if ternario
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error", url_api))
            }
        });
        xhttp.send(); 
    });
}


module.exports = fetchData;