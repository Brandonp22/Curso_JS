
//Sort List
function sortList(list){
    const listSortered = list.sort(function(accumulatedValue,newElement){
        return accumulatedValue - newElement;
    });
    return listSortered;
}


//Mean
function calculateMean(list){

    const sumList = list.reduce(
        function (accumulatedValue = 0, newElement){
            return accumulatedValue + newElement;
        }
    );

    const averageList = sumList / list.length;
    return averageList;
}

// Median
function calculateMedian(list){

    const medianList = parseInt(list.length /2);
    
    function even(number){
        return (number % 2 === 0);
    }
    
    let median;
    
    if(even(list.length)){
        const element1 = list[medianList - 1];
        const element2 = list[medianList];
    
        const averageElements = calculateMean([element1, element2]);
        median = averageElements;
    }else{
        median = list[medianList]; 
    }
    return median;
}


//Mode
function calculateMode(list){
    const listCount={};
    
    list.map(
        function(element){
            if(listCount[element]){
                listCount[element] += 1;
            }else{
                listCount[element] = 1; 
            }
        }
    )
    const listArray = Object.entries(listCount).sort(
        function (accumulatedValue, newValue){
            return accumulatedValue[1] - newValue[1];
        }
    );
    const mode = listArray[listArray.length - 1];
    return mode[0];
}


// Geometric Mean
function calculateGeometricMean(list){
    const multiList = list.reduce(
        function (accumulatedValue, newElement){
            return accumulatedValue * newElement;
        }
    );
    console.log(multiList);
    return multiList **(1/list.length); 
}


// HTMl
//Aquí interactuamos con el html
function calculateAverage(){
    const inputList = document.getElementById("InputList");
    const valueList = inputList.value;

    let list = (valueList.split(',')).map(Number);
    list = sortList(list); 

    //Population
    const population = list.length;
    const populationRes = document.getElementById("populationResult");
    populationRes.innerHTML = population; 

    //Sort List 
    const orderedList = list;
    const sortListRes = document.getElementById("sortListResult");
    sortListRes.innerHTML = orderedList; 

    //Mean
    const mean = calculateMean(list);
    const meanRes = document.getElementById("meanResult");
    meanRes.innerHTML = mean; 

    //Median
    const median = calculateMedian(list);
    const medianRes = document.getElementById("medianResult");
    medianRes.innerHTML = median;    

    //Mode
    const mode = calculateMode(list);
    const modeRes = document.getElementById("modeResult");
    modeRes.innerHTML = mode;     
    
    //Geometric Mean
    const geoMean = calculateGeometricMean(list);
    const geoMeanRes = document.getElementById("GeomeanfResult");
    geoMeanRes.innerHTML = geoMean; 
}

