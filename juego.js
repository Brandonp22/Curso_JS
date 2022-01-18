var jugador1 = "";
var jugador2 = "";

if (jugador1 == "tijera" && jugador2 == "papel"){
    console.log("Jugador 1 gana")
}else if (jugador1 == "papel" && jugador2 == "piedra"){
    console.log("Jugador 1 gana")
}else if (jugador1 == "piedra" && jugador2 == "tijera"){
    console.log("Jugador 1 gana")
}else if (jugador1 == jugador2){
    console.log("Empate")
}else{
    console.log("Jugador 2 gana")
}


// Piedra, papel o tijera con SWITCH

var jugador1 = "";
var jugador2 = "";

var jugador1 = prompt("Jugador 1 - Elije una opcion: \n1.Tijera \n2.Papel \n3.piedra"); // Prompt nos permite agregar un input
var jugador2 = prompt("Jugador 2 - Elije una opcion: \n1.Tijera \n2.Papel \n3.piedra"); // Esto \n sirve para agregar un salto de linea

function Jugador1(jugador1){ // Validamos la opcion del jugador 1 y la convertimos a un string correspondiente para luego compararlo en el switch case
    var resultado;
    if (jugador1 == 1){
        resultado = "tijera"
    } else if(jugador1 == 2){
        resultado = "papel"
    }else if (jugador1 == 3){
        resultado = "piedra"
    }
    return resultado; // Nos retorna el resultado en String
}

function Jugador2(jugador2){ // Igual que jugador 1 valimdamos la opcion de jugador 2 y la convertimos a un string correspondiente para luego compararlo en el switch case
    var resultado;
    if (jugador2 == 1){
        resultado = "tijera"
    } else if(jugador2 == 2){
        resultado = "papel"
    }else if (jugador2 == 3){
        resultado = "piedra"
    }
    return resultado;
}

switch (true){
    case (Jugador1(jugador1) == "tijera" && Jugador2(jugador2) == "papel"): // llamamos a la funcion de cada jugador y le enviamos su parametro para validar
        alert("Jugador 1 eligio: " + Jugador1(jugador1) + "\nJugador 2 eligio: " + Jugador2(jugador2) + "\n\nResultado: Jugador 1 gana!") // El alert nos retorna una ventana emergente con el resultado
        break;
    case (Jugador1(jugador1) == "papel" && Jugador2(jugador2) == "piedra"):
        alert("Jugador 1 eligio: " + Jugador1(jugador1) + "\nJugador 2 eligio: " + Jugador2(jugador2) + "\n\nResultado: Jugador 1 gana!")
        break;
    case (Jugador1(jugador1) == "piedra" && Jugador2(jugador2) == "tijera"):
        alert("Jugador 1 eligio: " + Jugador1(jugador1) + "\nJugador 2 eligio: " + Jugador2(jugador2) + "\n\nResultado: Jugador 1 gana!")
        break;
    case (Jugador1(jugador1) == Jugador2(jugador2)):
        alert("Jugador 1 eligio: " + Jugador1(jugador1) + "\nJugador 2 eligio: " + Jugador2(jugador2) + "\n\nResultado: Empate!")
        break;
    default:
        alert("Jugador 1 eligio: " + Jugador1(jugador1) + "\nJugador 2 eligio: " + Jugador2(jugador2) + "\n\nResultado: Jugador 2 gana!")
        break;
}

