var estudiantes = ["Mario", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

while(estudiantes.length > 0){
    console.log(estudiantes + "[" + estudiantes.length + "]")
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
console.log("Todos los estudiantes fueron saludados (Salimos del while)");

