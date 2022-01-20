
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
const list1=[
    100,
    200,
    500,
    400000000
];

const medianList = parseInt(list1.length /2);

function even(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let median;

if(even(list1.length)){
    const element1 = list1[medianList - 1];
    const element2 = list1[medianList];

    const averageElements = calculateMean([element1, element2]);
    median = averageElements;
}else{
    median = list1[medianList];
}