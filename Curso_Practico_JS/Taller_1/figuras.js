// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

// Código del triángulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("los lados del triángulo miden: " 
    + ladoTriangulo1 + "cm, " 
    + ladoTriangulo2 + "cm, " 
    + baseTriangulo + "cm."
);

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTringulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTringulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

// Código del circulo
console.group("Circurlos");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const pi = Math.PI;
console.log("Pi es: " + pi);

//Circunferencia
const perimetroCircunferencia = diametroCirculo * pi;
console.log("El perimetro del circulo es: " + perimetroCircunferencia.toFixed(2) + "cm");
// Con toFixed podemos redondear nuestros numeros colocando la cantidad de decimales que queremos
// Entre () -> Ejemplo: toFixed(2) para que nos de solo 2 decimales 

//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El area del circulo es: " + areaCirculo.toFixed(2) + "cm2");
console.groupEnd();




