//CLASE #7: Implementando Promesas

//Ejemplo 1
const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve("OK");
        }else{
            reject("Something is wrong");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));


//Ejemplo 2
const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve("TRUE");
            }, 2000);
        }else{
            const error = new Error("Something is wrong");
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("Array of results", response);
    })
    .catch(err =>{
        console.error(err);
    })