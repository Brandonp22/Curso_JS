// Código del cuadrado
function squarePerimeter(side){
    return side * 4;
}
function squareArea(side){
    return side * side;
}


// Código del triángulo
function trianglePerimeter(sideA, sideB, base){
    return sideA + sideB + base;
}
function triangleArea(base, height){
    return (base * height) / 2;
}

// Código del triángulo isósceles
function isoTriangleHeight(sideA, sideB, base){

    if(sideA === sideB && sideB != base){
        return Math.sqrt((sideA**2) - ((base**2)/4));
    }else{
        return false;
    }
}


// Código del circulo
function circleDiameter(radius){
    return radius * 2;
}
function circlePerimeter(radius){
    const diametro = circleDiameter(radius);
    return (diametro * Math.PI).toFixed(2);
}
function circleArea(radius){
    return ((radius * radius) * Math.PI).toFixed(2);
}



//Aquí interactuamos con el html

// Cuadrado
function calculateSquare(){
    //Perimeter
    const inputP = document.getElementById("InputSquare");
    const valueP = inputP.value;
    const perimeter = squarePerimeter(valueP);
    const perimeterRes = document.getElementById("spResult");

    perimeterRes.innerHTML = perimeter.toFixed(2) + " cm";

    //Area
    const inputA = document.getElementById("InputSquare");
    const valueA = inputA.value;
    const area = squareArea(valueA);
    const areaRes = document.getElementById("saResult");

    areaRes.innerHTML = area.toFixed(2) + " cm";
}


// Triangulo
function calculateTriangle(){
    const inputSideA = document.getElementById("InputTriangleSideA");
    const valueSideA = Number(inputSideA.value);

    const inputSideB = document.getElementById("InputTriangleSideB");
    const valueSideB = Number(inputSideB.value);

    const inputBase = document.getElementById("InputTriangleBase");
    const valueBase = Number(inputBase.value);

    const inputHeight = document.getElementById("InputTriangleHeight");
    const valueHeight = Number(inputHeight.value);

    //Perimeter
    const perimeter = trianglePerimeter(valueSideA, valueSideB, valueBase);
    const perimeterRes = document.getElementById("tpResult");
    perimeterRes.innerHTML = perimeter + " cm";

    //Area
    const area = triangleArea(valueBase, valueHeight);
    const areaRes = document.getElementById("taResult");
    areaRes.innerHTML = area + " cm"; 
}

// Triangulo Isosceles
function calculateIsoTriangle(){
    const inputSideA = document.getElementById("InputIsoTriangleSideA");
    const valueSideA = Number(inputSideA.value);

    const inputSideB = document.getElementById("InputIsoTriangleSideB");
    const valueSideB = Number(inputSideB.value);

    const inputBase = document.getElementById("InputIsoTriangleBase");
    const valueBase = Number(inputBase.value);

    //Altura
    const height = isoTriangleHeight(valueSideA, valueSideB, valueBase);
    if (height != false){
        const heightRes = document.getElementById("ithResult");
        heightRes.innerHTML = height.toFixed(2) + " cm";
    }else{
        const heightRes = document.getElementById("ithResult");
        heightRes.innerHTML = "No es un triángulo isósceles";
    }
}


// Circulo
function calculateCircle(){
    //Diameter
    const inputD = document.getElementById("InputCircle");
    const valueD = inputD.value;
    const diameter = circleDiameter(valueD);
    const diameterRes = document.getElementById("cdResult");

    diameterRes.innerHTML = diameter + " cm";

    //perimeter
    const inputP = document.getElementById("InputCircle");
    const valueP = inputP.value;
    const perimeter = circlePerimeter(valueP);
    const perimeterRes = document.getElementById("cpResult");

    perimeterRes.innerHTML = perimeter + " cm";

    //Area
    const inputA = document.getElementById("InputCircle");
    const valueA = inputA.value;
    const area = circleArea(valueA);
    const areaRes = document.getElementById("caResult");

    areaRes.innerHTML = area + " cm";
}
