var estudiantes = ["Mario", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`hola, ${estudiantes}`)
}

// Ejemplo 1

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

// Ejemplo 2

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}